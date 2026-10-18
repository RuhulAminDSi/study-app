# Written Q6–Q8 — Counter-Type ADC, Binary Search Recurrence, Circuit Analysis

- **Source image:** `15_adc-and-binary-search-recurrence.jpg` (original file name `496925987_9767686450013585_4879253949299806071_n.jpg`)
- **Page:** 15 of 22 (folder-wide position)
- **Paper / Post:** not shown on this page (only the "Question Bank / Written" running heads of the COMPACT IT JOB SOLUTION booklet; the paper banner is on an earlier page)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION

## Transcription Notes

- The page opens **mid-answer** to question 6 — the question 6 wording itself is on the preceding page.
- The counter-type ADC **circuit diagram** is reproduced as an embedded image and is transcribed below as a labelled connection list, since a drawing cannot be reproduced verbatim in markdown. All labels visible on the diagram (`V_in`, comparator `+`/`−`, AND gate, `Counter` with `Clk` and reset input, `Control`, `Latch`, `DAC`, `V_DAC`, "Binary Output") are recorded.
- A small faint **handwritten mark** (looks like a `1`) appears above the counter block in the circuit diagram. This marginalia is **not part of the official paper**.
- **Q8 ("Find R and I from a circuit.") is incomplete** — only the question heading is on this page; the circuit figure and answer are on the following page.
- No question numbering restarts on this page; numbering runs 6, 7, 8 continuously.

## Content

*(running heads: "Question Bank" — "Written")*

**6. Draw an ADC converter circuit which convert an analog signal to digital signal.**
**Answer:**
During the start of the conversion, the output of DAC is zero. So, whatever input voltage V_in is applied at the positive terminal of the comparator, the output of the comparator is high. Since it is high, the AND gate is enabled and it allows the clock pulse to pass. The counter then starts counting the clock pulses. The output of the counter is fed to the DAC, which computes the decimal equivalent of its binary input. Now, the output of the DAC V_DAC increases in a staircase fashion and it is continuously compared with the input V_in. As long as V_in > V_DAC, the counter keeps counting.

**Circuit diagram (counter-type ADC):** V_in enters the comparator `+` input; the comparator `−` input is fed back from V_DAC. Comparator output goes to one input of the **AND gate**; the other AND-gate input is the clock pulse (labelled by the square-wave symbol). AND-gate output drives the **Counter** clock input (`Clk`), and a reset/clear line from the **Control** block. The Counter's parallel binary output lines go to the **DAC**, and branch off (via tapped connection dots) to the **Latch**, which outputs the "Binary Output". The DAC output V_DAC is fed back to the comparator `−` input. The Control block receives the counter/latch status and drives the counter clear and latch enable.

The moment V_in < V_DAC, the comparator output is low, and AND gate is disabled, therefore blocking the clock pulses. Also, the control block notices this transition and puts a low signal in the clear pin of the counter, thereby resetting it. Simultaneously, the last output of the counter is latched and this is the digital binary output of the given input voltage.

So, the basic principle of operation of the counter-type ADC is to keep counting the number of clock pulses till the input is greater than the DAC output and the moment DAC output is greater than the input, the counter is reset and the last count is latched and given as output.

**7. Recurrence equation of binary search and solve it.**
**Answer:**
Recurrence relation is T(n) = T(n/2) + 1, where T(n) is the time required for binary search in an array of size n. We guess the solution as T(n) = O(nLogn). Now we use induction to prove our guess. We need to prove that T(n) <= cnLogn. We can assume that it is true for values smaller than n.

```
T(n)    = 2T(n/2) + n
        <= 2cn/2Log(n/2) + n
        =  cnLogn – cnLog2 + n
        =  cnLogn – cn + n
        <= cnLogn
```

**8. Find R and I from a circuit.**

*[circuit figure and answer are on the next page — cut off]*