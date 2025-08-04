
% cv-style.sty – Extends tufte-handout with AwesomeCV-like functionality

\ProvidesPackage{cv-style}[2025/07/13 CV Enhancements for Tufte Layout]

% Required packages (should be loaded by tufte-handout already)
\RequirePackage{fontawesome5}
\RequirePackage{enumitem}
\RequirePackage{marginnote}
\RequirePackage{hyperref}

% Section titles with full-width rules
\renewcommand{\section}[1]{%
  \par\vspace{1.5ex}%
  \noindent\rule{\textwidth}{0.5pt}\par
  \noindent\textbf{\Large #1}%
  \par\vspace{0.5ex}%
}

\renewcommand{\subsection}[1]{%
  \par\vspace{1.2ex}%
  \noindent\rule{\textwidth}{0.4pt}\par
  \noindent\textbf{\large #1}%
  \par\vspace{0.5ex}%
}

% Margin note helpers
\newcommand{\sidenote}[1]{\marginnote{\footnotesize\itshape #1}}
\newcommand{\marginicon}[2]{\marginnote{\faIcon{#1}~\footnotesize #2}}

% CV section heading macro
\newcommand{\cvsection}[1]{%
  \section*{#1}%
  \marginnote{\textbf{#1}}[-1.5ex]%
}

% Entry for jobs or education
\newcommand{\cventry}[3]{%
  \marginnote{\small\itshape #1}%
  \textbf{#2} \\
  \small #3 \par\vspace{1em}
}

% Left-aligned header block
\newcommand{\cvheader}[3]{%
  \noindent{\Huge\bfseries #1} \\[0.5em]
  \noindent #2 \\[0.2em]
  \noindent #3 \par\vspace{1.5em}
  \noindent\rule{\textwidth}{0.5pt}\par\vspace{2em}
}
