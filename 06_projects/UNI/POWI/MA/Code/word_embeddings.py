import gensim.downloader
model = gensim.downloader.load("glove-wiki-gigaword-50")
model["tower"]

model["king"] + model["woman"] - model["man"]