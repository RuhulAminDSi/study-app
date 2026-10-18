# BJT cut-off / saturation / active region and n-channel JFET working principle

- **Source image:** `02_bjt-regions-and-jfet-principle.jpg` (original file name `490089025_1231536212308624_4102014961580229201_n.jpg`)
- **Page:** 2 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **15**
- **Paper / Post:** not shown (no paper banner is printed on this page; it belongs to the same continuous section as the facing page carrying the BPDB banner)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens mid-answer: "At cut off, the base-emitter junction no longer remains forward biased…" — the beginning of the cut-off explanation is on the preceding page of the original document, which is not in this set.
- No paper banner is printed on this page. The content is on the same subject (transistor regions / JFET) as the BPDB section that begins on printed page 16, but the banner itself is not repeated here, so the paper is recorded as "not shown".
- **Figure transcribed as text:** (i) a common-emitter NPN circuit with collector resistor R<sub>C</sub>, source V<sub>CC</sub>, base bias battery, and labelled currents I<sub>B</sub>, I<sub>C</sub>, I<sub>E</sub>; (ii) the I<sub>C</sub>–V<sub>CE</sub> characteristic / load-line graph, with axes I<sub>C</sub> (mA) and V<sub>CE</sub>, and annotations V<sub>CC</sub>/R<sub>C</sub>, SATURATION, CUT OFF, I<sub>B</sub> = I<sub>B(sat)</sub>, I<sub>B</sub> = 0, V<sub>CE(sat)</sub> = V<sub>knee</sub>. A third small figure shows the NPN transistor symbol with terminals C, B, E.
- Note an inconsistency in the original printing: the two figures are labelled "(i)" and "(ii)", and the running text is then numbered "(ii) Saturation." and "(iii) Active region." — the labels collide. Reproduced verbatim as printed.
- Subscripts are rendered in plain notation (Vgs, Ids, Vth, Vp, I_C(sat), V_knee) rather than LaTeX for readability; all original values are unchanged.
- No handwritten marginalia visible.

## Content

At cut off, the base-emitter junction no longer remains forward biased and normal transistor action is lost. The collector-emitter voltage is nearly equal to VCC i.e. VCE (cut off) = VCC

**Figure (i)** — common-emitter NPN circuit: base current I_B into the base terminal, collector current I_C through R_C, emitter current I_E; supply V_CC at the bottom right; separate base-bias source at bottom left.

**Figure (ii)** — load-line diagram:
- Vertical axis: I_C (mA); horizontal axis: V_CE; origin labelled 0.
- Marked intercept/levels: V_CC / R_C on the I_C axis; horizontal lines at I_B = I_B(sat) and I_B = 0; V_CE(sat) = V_knee on the V_CE axis.
- Annotated regions: "SATURATION" and "CUT OFF".

(ii) Saturation. The point where the load line intersects the IB = IB(sat) curve is called saturation. At this point, the base current is maximum and so is the collector current. At saturation, collector-base junction no longer remains reverse biased and normal transistor action is lost.

$$
I_{C(sat)} \approx \frac{V_{CC}}{R_C}\ ;\quad V_{CE} = V_{CE(sat)} = V_{knee}
$$

If base current is greater than IB(sat), then collector current cannot increase because collector-base junction is no longer reverse-biased.

(iii) Active region. The region between cut off and saturation is known as active region. In the active region, collector-base junction remains reverse biased while base-emitter junction remains forward biased. Consequently, the transistor will function normally in this region.

*[Figure: NPN transistor symbol with collector terminal C at top, base terminal B at left, emitter terminal E at bottom; emitter arrow pointing outward.]*

### Working Principle of an n-channel JFET

A junction field-effect transistor (JFET) is a type of transistor that uses an electric field to control the conductivity of a channel between the sources and drain terminals. The JFET has three terminals: the source, the gate, and the drain. The gate is separated from the channel by a thin layer of insulating material.

The n-channel JFET is the most common type of JFET. It is composed of a bar of n-type semiconductor material with a p-type region in the center. The gate is connected to the p-type region, and the source and drain are connected to the n-type regions on either side.
