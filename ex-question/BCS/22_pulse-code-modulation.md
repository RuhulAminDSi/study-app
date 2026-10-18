# Pulse Code Modulation (PCM) — explanation with PCM output waveform and block diagram

- **Source image:** `22_pulse-code-modulation.jpg` (original file name `490330945_1232700905525488_4321463087120983122_n.jpg`)
- **Page:** 22 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not shown (header reads only "Previous Exam Questions")
- **Exam date:** not shown
- **Marks:** not shown
- **Printed page number:** 566
- **Prepared by (compilation):** COMPACT IT Written

## Transcription Notes

- This page is expository/study text from a coaching compilation under the running head "Previous Exam Questions"; no question number, marks allocation, paper name or date appear on it.
- Two figures are reproduced as labelled graphics and are described here in text form, since the drawings cannot be reproduced verbatim: (i) a "Sine Wave Input" / "PCM Output" waveform pair with dashed sampling lines, and (ii) a PCM transmitter/channel/receiver block diagram.
- No handwritten marginalia observed on this page.

## Content

There are many modulation techniques, which are classified according to the type of modulation employed. Of them all, the digital modulation technique used is Pulse Code Modulation PCM. A signal is pulse code modulated to convert its analog information into a binary sequence, i.e., 1s and 0s. The output of a PCM will resemble a binary sequence. The following figure shows an example of PCM output with respect to instantaneous values of a given sine wave.

*[Figure: two stacked waveforms. Upper trace labelled "Sine Wave Input" — a sinusoid crossing a horizontal zero axis. Lower trace labelled "PCM Output" — a stepped/rectangular pulse train whose pulse widths vary with the instantaneous amplitude of the sine wave. Dashed vertical lines connect corresponding sampling instants on the sine wave to the sampling marks on the PCM output.]*

Instead of a pulse train, PCM produces a series of numbers or digits, and hence this process is called as digital. Each one of these digits, though in binary code, represent the approximate amplitude of the signal sample at that instant. In Pulse Code Modulation, the message signal is represented by a sequence of coded pulses. This message signal is achieved by representing the signal in discrete form in both time and amplitude.

**Basic Elements of PCM**

The transmitter section of a Pulse Code Modulator circuit consists of Sampling, Quantizing and Encoding, which are performed in the analog-to-digital converter section. The low pass filter prior to sampling prevents aliasing of the message signal. The basic operations in the receiver section are regeneration of impaired signals, decoding, and reconstruction of the quantized pulse train. Following is the block diagram of PCM which represents the basic elements of both the transmitter and the receiver sections.

*[Figure: block diagram. "TRANSMITTER SECTION" row, left to right: Analog message signal → LPF → Sampler → Quantizer → Encoder; the Encoder output is taken off to the right and labelled "PCM output given to channel". "CHANNEL" row: the PCM output enters a "Regenerative Repeater", passes through the dashed-line section labelled CHANNEL to a second "Regenerative Repeater", whose output is labelled "Channel output". "RECEIVER SECTION" row, left to right: Regeneration circuit → Decoder → Reconstruction filter → Destination.]*

**There are some important advantages of PCM (pulse code modulation) given below:**

- ✓ The PCM (pulse code modulation) convenient for long distance communication.