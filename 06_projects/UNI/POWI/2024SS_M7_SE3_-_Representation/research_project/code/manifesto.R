library(manifestoR)
mp_setapikey("manifesto_apikey.txt")
corpus <- mp_corpus(countryname == "Germany")
saveRDS(corpus, file = "Manifesto_Corpus.rds")
write.csv(corpus, "Manifesto_Corpus.csv")  # Save it as CSV
