# ------------------------------------ IMPORTS ------------------------------------

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from pytube import YouTube #Descarga de audio

import whisper #Transcripcion

from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer #Traduccion

from bark import SAMPLE_RATE, generate_audio, preload_models

from scipy.io.wavfile import write as write_wav

import nltk

import numpy as np

from pydub import AudioSegment

import torch #GPU

# ------------------------------------ VARIABLES ------------------------------------

nombre_archivo = "audio.mp3" # Nombre del archivo de audio
app = FastAPI() # Inicializacion de la API con el puerto 8000

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=["*"],
)

# Revisa si hay GPU
if torch.cuda.is_available():
    device = torch.device("cuda")
else:
    device = torch.device("cpu")


# ------------------------------------ FUNCIONES ------------------------------------
# Post
@app.get("/")
def index():
    return "hola"

@app.get("/descargar/{url}")
def descargar_audio(url):
    url = "https://www.youtube.com/watch?v=" + url
    yt = YouTube(url)
    yt.streams.filter(only_audio=True).first().download(filename=nombre_archivo)
    return {"titulo": yt.title,
            "descripcion": yt.description,
            "duracion": yt.length,
            "autor": yt.author,
            "fecha": yt.publish_date}

@app.get("/transcribir") 
def transcribir():
    print("Transcribiendo...")
    model = whisper.load_model("medium", device=device)
    result = model.transcribe(nombre_archivo, fp16=False)
    transcipcion = result["text"]

    with open("transcripcion.txt", "w") as file:
        file.write(transcipcion)

    return {"contenido": transcipcion,
            "longitud": len(transcipcion)}

@app.get("/traducir/{idioma}/{idioma_destino}")
def traducir(idioma,idioma_destino):

    model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_1.2B").to(device)
    tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_1.2B")

    with open("transcripcion.txt", "r") as file:
        texto = file.read()

    print("Traduciendo...")

    listaPalabras = texto.split(" ")
    lista = [] # Lista para almacenar las palabras que se van a traducir
    palabras_sobrantes = []  # Lista para almacenar las palabras restantes
    result_stringF = ""

    i = 0
    while i < len(listaPalabras): # Recorre la lista de palabras para separar en grupos de 100

        if i % 100 == 0:
            textoResult = " ".join(lista)
            tokenizer.src_lang = idioma
            encoded_hi = tokenizer(textoResult, return_tensors="pt").to(device)
            generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(idioma_destino))
            #Añade resultados a un string
            results = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
            result_string = " ".join(results)
            result_stringF = result_stringF + result_string
            lista = []

        lista.append(listaPalabras[i])

        if i == len(listaPalabras) - 1:
            palabras_sobrantes.extend(lista)  # Almacena las palabras restantes al final del bucle

        i = i + 1

    if len(palabras_sobrantes) > 0:
        textoResult = " ".join(palabras_sobrantes)
        tokenizer.src_lang = idioma
        encoded_hi = tokenizer(textoResult, return_tensors="pt").to(device)
        generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(idioma_destino))
        #Añade resultados a un string
        results = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
        result_string = " ".join(results)
        result_stringF = result_stringF + result_string

    with open("traduccion.txt", "w") as file:
        file.write(result_stringF)

    print("Traduccion finalizada: ", result_stringF)
    
    return {"contenido": result_stringF,
            "longitud": len(result_stringF)}

@app.get("/lectura")
def lectura():

    # download and load all models
    preload_models()

    # nltk.download('punkt')

    with open("traduccion.txt", "r") as file:
        texto = file.read()

    newText = texto.replace("\n", " ").strip()
    sentences = nltk.sent_tokenize(newText) # split into sentences
    SPEAKER = "v2/en_speaker_1"

    pieces = []
    for sentence in sentences:
        audio_array = generate_audio(sentence, history_prompt=SPEAKER)
        pieces+=[audio_array]

    data = np.concatenate(pieces)

    # save audio to disk as WAV
    write_wav("bark_generation.wav", rate=SAMPLE_RATE, data=data)

    # convert WAV to MP3
    audio = AudioSegment.from_wav("bark_generation.wav")
    audio.export("bark_generation.mp3", format="mp3")

""" 
-------------------------------- PRUEBAS TRADUCCION --------------------------------
texto = "¡Hola! Mi nombre es Javier. Cuando era niño, mi mamá pensaba que los jóvenes debían practicar un deporte y tocar un instrumento. Esto me incentivó a jugar futbol y me enseñó a trabajar en equipo, generar confianza y buscar una meta común. También me animó a tocar el piano para mejorar la coordinación entre mi cerebro y mi cuerpo, mi capacidad cognitiva, perseverancia y disciplina. Luego, me interesé más en los pasatiempos y empecé a emplear más tiempo en ellos. Así que comencé a probar otros deportes como el basquetbol y el tenis. También, luego de desarrollar un muy buen gusto por la música, aprendí a tocar otros instrumentos como la guitarra y el violín. Todas estas herramientas fueron construyendo nuevas habilidades que podía utilizar en otras actividades.Mis miedos más grandes cuando era pequeño eran bailar, nadar y cocinar. Hace poco tiempo decidí afrontarlos, por lo que me inscribí en clases de flamenco, clases de natación y clases de cocina. Haber practicado me ayudó con el flamenco y la natación. Además, ahora preparo comidas deliciosas para mi familia todos los domingos. Los pasatiempos me han ayudado a aprender mucho y a sentirme mucho más autosuficiente y confiado de mis propias aptitudes."
texto="Llamada “la heroica” por todos los eventos históricos que allí tuvieron lugar, es el lugar ideal para ver bellos atardeceres y disfrutar de aguas termales1 y relajarse antes de visitar el Museo Histórico para conocer más de la historia uruguaya. COMER UN ASADO EN EL MERCADO DEL PUERTO Montevideo cuenta con grandes atractivos turísticos pero...nadie puede pasar por la ciudad sin probar un asado uruguayo. Para esto, nada mejor que darse una vuelta por el Mercado del Puerto en el casco histórico de la ciudad. Es un galpón2 de más de 130 años con opciones culinarias maravillosas. Para respirar historia...y olorcito a asado. SACARSE UNA FOTO EN EL MONUMENTO “LOS DEDOS” Uno de los puntos turísticos más famosos de Uruguay es el monumento “Los dedos” en Punta del Este. Con varios nombres, esta escultura del artista chileno Mario Irarrázabal fue creada con la intención de advertir a los bañistas sobre los peligros de las aguas del balneario La Barra, ideal para surfista y sobre las aguas más calmas del balneario Solanas, ideal para nadadores. Hoy en día, quien va para Punta del Este no puede irse sin una foto en este lugar. CAMINAR POR UN PATRIMONIO HISTÓRICO EN COLONIA Colonia del Sacramente ofrece una de las más bonitas imágenes del período postcolonial por estas latitudes. Declarada Patrimonio de la Humanidad en 1995, la ciudad está conservada de tal manera que podemos sentarnos en un restaurante y respirar historia. Sus calles, diseñadas al estilo portugués, contrastan con las ciudades de la época construidas según las ordenanzas españolas. Pasar por la Calle de los Suspiros es una obligación para cualquier turista. PARTICIPAR DE UN CARNAVAL A LA URUGUAY Generalmente, el carnaval uruguayo sucede a fines de enero y principios de febrero, así que vale la pena reservar estas fechas. Con murgas3 de aproximadamente 20 personas, la música, los cánticos y la vuelta a las raíces visten de fiesta a todo Uruguay."

"""