# Tail of a preceding data-communication question, then start of RPGCL Assistant Manager (ICT) 2022 (BUET) — Q1 (C program to remove a character)

- **Source image:** `01_rpgcl-assistant-manager-2022.jpg` (original file name `495542833_9767686403346923_8604781452070489547_n.jpg`)
- **Page:** 1 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** RPGCL (Rupantaritrita Prakritik Gas Company Limited) — Assistant Manager (ICT); Exam: 2022 (BUET)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- The page opens mid-solution: the topmost lines are the tail of the printed solution to a previous question (Q10 of an earlier paper). The question itself is on the previous page and is not present here.
- In the `SNR_dB` derivation the printed first expression reads "SNR_dB = 10 log10 100000", which is reproduced verbatim although the following lines use `10^4`/`10^5`. No correction has been made.
- The C program under Q1 is cut off by the bottom of the page after `printf("Enter the string : \n");`.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

```
SNR_dB = 10 log10 100000
        = 10log_10 10^4
        = 40
```

The values of SNR and SNR<sub>dB</sub> for a noiseless channel are SNR = Signal power / 0 = α

SNR<sub>dB</sub> = 10 log<sub>10</sub> α = α

**10. We need to send 265 kbps over a noiseless channel with a bandwidth of 20kHz. How many signal levels do we need?**

**Answer:**

256000 = 2 × 20000 × log L = 6.625.

∴ L = 98.7 Levels.

Since this result is not a power of 2, we need to either increase the number of levels or reduce the bit rate. If we have 128 levels, the bit rate is 280 kbps.

---

**RPGCL**
**(Rupantaritrita Prakritik Gas Company Limited)**
**Assistant Manager (ICT)**
**Exam: 2022 (BUET)**

**1. Write a C program to remove given character from string: Example input: programming and we want to remove: gram now output: proming without having the gram from string.**

**Answer:**

```c
    #include<stdio.h>
    #include<conio.h>
    #include<string.h>
    void removeChar(char * str, char charToRemove){
        int i, j;
        int len = strlen(str);
        for(i=0; i<len; i++){
            if(str[i] == charToRemove){
                for(j=i; j<len; j++){
                    str[j] = str[j+1];
                }
                len--;
                i--;
            }
        }

    }
    void main(){
        char str[100],ch,c;
        int i,j,len;
        printf("Enter the string : \n");
        [cut off]
```
