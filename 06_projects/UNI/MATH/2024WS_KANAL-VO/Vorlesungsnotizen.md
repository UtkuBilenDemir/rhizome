---
title: Vorlesungsnotizen
tags:
  - project_note 2025
  - uni
  - math
---
|     Created      |  Last Modified   |       Exists Since        |
|:----------------:|:----------------:|:----------------:|
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime`|

# Vorlesungsnotizen

# Überraschende Fakten – Vergleich mit der reellen Analysis

## Analytische Merkmale

### 1. Regularität
Eine auf einer offenen Menge $f$ einmal komplex differenzierbare Funktion ist unendlich oft komplex differenzierbar.

**Reelle Analysis:** Die Funktion $f(x) = x|x|$ ist einmal reell differenzierbar mit $f'(x) = 2|x|$, aber nicht zweimal reell differenzierbar.

---

### 2. Entwicklung in Potenzreihen
Jede auf einer offenen Menge komplex differenzierbare Funktion ist lokal in einer Potenzreihe entwickelbar.

**Kontrast zur reellen Analysis:**  
$$
f(x) = \begin{cases} 
    e^{-\frac{1}{x^2}}, & x \neq 0 \\
    0, & x = 0
\end{cases} \notin C^{\infty}(\mathbb{R})
$$

Es gilt: $f^{(n)}(0) = 0$ für alle $n \in \mathbb{N}$. Die Taylorreihe von $f$ um $0$ ist die Nullreihe, aber $f \neq 0$. Somit ist $f$ um $0$ in eine Potenzreihe **nicht** entwickelbar.

---

### 3. Eindeutigkeitssatz
Falls $f,g$ auf einem Gebiet $G$ komplex differenzierbar sind und $f = g$ auf einer Menge mit mindestens einem Häufungspunkt in $G$, dann gilt $f \equiv g$ überall in $G$.

**Reelle Analysis:** Die Funktion
$$
f(x) = \begin{cases} 
    x^2 \sin \frac{1}{x}, & x \neq 0 \\
    0, & x = 0
\end{cases}
$$
ist differenzierbar auf $\mathbb{R}$ und erfüllt $f(\frac{1}{k\pi}) = 0$, wobei $\frac{1}{k\pi} \to 0$ für $k \to \infty$, aber $f \not\equiv 0$.

---

### 4. Liouville'scher Satz
Sei $f: \mathbb{C} \to \mathbb{C}$ komplex differenzierbar und $|f|$ beschränkt, dann ist $f$ konstant.

**Reelle Analysis:** Es gibt viele reelle beschränkte Funktionen, die beliebig oft differenzierbar sind, z.B.:
$$ f(x) = \sin x, \quad x \mapsto \cos x, \quad x \mapsto \frac{1}{1+x^2}, \quad x \mapsto \arctan x $$

Alle diese Funktionen sind in $C^{\infty}(\mathbb{R})$.

# §1. Komplexe Zahlen und Funktionen

## 1.1. Komplexe Zahlen – Wiederholung

Historisch sind die komplexen Zahlen aus dem Bedarf entstanden, polynomiale Gleichungen zu lösen (zum Beispiel $z^2 = -1$ wurde als neue Zahl eingeführt). Die Cardanische Formel für die Lösung kubischer und quartischer Gleichungen war eine weitere Motivation für die Einführung komplexer Zahlen. Später wurden sie fundamental für die gesamte moderne Mathematik und Physik.

### Algebraische Struktur der komplexen Zahlen

- $\mathbb{R}^2$ als Vektorraum über $\mathbb{R}$:
  - Die Addition erfolgt komponentenweise.
  - Die Multiplikation ist definiert durch:
    $$ (a,b) (c,d) = (ac - bd, ad + bc) $$
    für $a, b, c, d \in \mathbb{R}$.
  
  Damit wird $\mathbb{R}^2$ zu einem **Körper** mit dem Nullelement $(0,0)$ und dem Einselement $(1,0)$, welches wir mit $1$ bezeichnen. Alle Elemente können so in der Form $a + bi$ geschrieben werden.
  
- Jedes Element $(a,b) \neq (0,0)$ besitzt ein **inverses Element**, das durch
  $$ (a,b)^{-1} = \left( \frac{a}{a^2 + b^2}, \frac{-b}{a^2 + b^2} \right) $$
  gegeben ist.

### Einführung der imaginären Einheit $i$

Setzt man $i := (0,1)$, so kann jedes Element $(a,0) \in \mathbb{C}$ mit der reellen Zahl $a$ identifiziert werden. Dadurch wird $\mathbb{R}^2$ als Menge komplexer Zahlen interpretiert:

$$ (a,b) = a(1,0) + b(0,1) = a + bi. $$

**Eigenschaften der imaginären Einheit:**

- Es gilt: $i^2 = (0,1)(0,1) = (-1,0) = -1$.
- Damit erhalten wir die bekannte Definition:
  $$ i = \sqrt{-1}. $$
  Diese Notation wurde erstmals von Euler im Jahr 1777 verwendet.

### Multiplikation komplexer Zahlen

Mit $i^2 = -1$ und den allgemeinen Regeln der Multiplikation in einem Körper kann man zeigen:

$$ (a + i b)(c + i d) = ac + i ad + i bc + i^2 bd. $$

Da $i^2 = -1$ folgt:

$$ (a + i b)(c + i d) = (ac - bd) + i(ad + bc). $$

Dies zeigt, dass die zuvor definierte Multiplikation mit kartesischen Koordinaten genau der üblichen Multiplikation komplexer Zahlen entspricht.

# References
1. [[2024WS_KANAL-VO]]