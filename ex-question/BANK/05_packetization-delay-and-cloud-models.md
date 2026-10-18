# Question 4 (packetization delay) continued and Question 5 (IaaS, PaaS, SaaS)

- **Source image:** `05_packetization-delay-and-cloud-models.jpg` (original file name `489853410_1231535952308650_2380564707963076101_n.jpg`)
- **Page:** 5 of 8
- **Paper / Post:** Bangladesh Bank — Assistant Maintenance Engineer (Exam: 04.02.2023, BIBM); compiled as "Previous Exam Questions" / "COMPACT IT Written"
- **Exam date:** 04.02.2023
- **Marks:** not shown

## Transcription Notes

The page opens mid-solution to Question 4 (packetization delay) — the question statement and the "Given" list are on the previous page and are not visible here; only the payload calculation onward is present. Printed wording and arithmetic are reproduced verbatim as printed, including the value "11,960 bits" (from 1495 × 8). Page footer reads `Page | 10`. Coaching branding is a watermark/footer only; no handwritten marginalia were observed.

## Content

- Payload size = P - H
- Payload size = 1500 - 5
- Payload size = 1495 bytes

Next, we can calculate the time required to fill the packet with data at a constant rate of 128 kbps. We can use the following formula to calculate the time required to transmit a certain amount of data:

**Time = Amount of data / Transmission rate**

In this case, the amount of data is the payload size, and the transmission rate is 128 kbps (or 128,000 bits per second). However, we need to convert the payload size from bytes to bits before we can use this formula:

- Payload size (in bits) = Payload size (in bytes) × 8
- Payload size (in bits) = 1495 × 8
- Payload size (in bits) = 11,960 bits

Now we can use the formula to calculate the time required to transmit the payload:

- Time = Payload size / Transmission rate
- Time = 11,960 bits / 128,000 bits per second
- Time = 0.0935 seconds

Therefore, the packetization delay for a packet of size 1500 bytes, with a header size of 5 bytes, and a digitally encoded voice source rate of 128 kbps, is approximately 0.0935 seconds.

**5. Explain IaaS, PaaS, and SaaS with respect to cloud computing.**

**Answer:**

**IaaS:** IaaS stands for Infrastructure as a Service. It provides users with the capability to provision processing, storage, and network connectivity on demand. Using this service model, the customers can develop their own applications on these resources.

**PaaS:** PaaS stands for Platform as a Service. Here, the service provider provides various services like databases, queues, workflow engines, e-mails, etc. to their customers. The customer can then use these components for building their own applications. The services, availability of resources and data backup are handled by the service provider that helps the customers to focus more on their application's functionality.

**SaaS:** SaaS stands for Software as a Service. As the name suggests, here the third-party providers provide end-user applications to their customers with some administrative capability at the application level, such as the ability to create and manage their users. Also some level of customizability is possible such as the customers can use their own corporate logos, colors, etc.