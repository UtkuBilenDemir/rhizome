import nltk
from nltk.tokenize import word_tokenize
from collections import Counter
import pandas as pd
import re
from nltk.tokenize import sent_tokenize

# Load the Manifesto Corpus CSV
df_corpus = pd.read_csv("Manifesto_Corpus.csv")

# Extract texts
all_texts = df_corpus["text"].dropna().tolist()

# Define patterns for representative claims (based on Saward's framework)
patterns = {
    "Claim of Representation": r"\b(wir vertreten|wir sind die stimme|nur wir|kämpfen für)\b",
    "Claim of Misrepresentation": r"\b(die regierung ignoriert|die anderen parteien sind|werden nicht gehört)\b",
    "Claim of Interests/Values": r"\b(wir stehen für|wir setzen uns ein für|unser ziel ist)\b",
    "Proclamation": r"\b(die zukunft gehört|wir brauchen eine veränderung|es ist zeit für)\b"
}

# Initialize storage for extracted claims
extracted_claims = {"Claim of Representation": [], "Claim of Misrepresentation": [], "Claim of Interests/Values": [], "Proclamation": []}

# Tokenize texts into sentences and categorize them
for text in all_texts:
    sentences = sent_tokenize(text)  # Split into sentences
    for sentence in sentences:
        for claim_type, pattern in patterns.items():
            if re.search(pattern, sentence, re.IGNORECASE):  # If pattern matches
                extracted_claims[claim_type].append(sentence)

# Convert results to a DataFrame
df_claims = []
for claim_type, sentences in extracted_claims.items():
    for sentence in sentences:
        df_claims.append([claim_type, sentence])

df_claims = pd.DataFrame(df_claims, columns=["Claim Type", "Sentence"])

# Save to CSV to inspect manually
df_claims.to_csv("Representative_Claims_Extracted.csv", index=False)

# Print a preview of categorized sentences
print(df_claims.head(10))  # Show first 10 representative claims
