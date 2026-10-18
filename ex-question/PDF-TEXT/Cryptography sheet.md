# Cryptography Sheet

| | |
|---|---|
| Source PDF | `Cryptography sheet.pdf` |
| Pages | 6 |
| What it is | A six-page illustrated study sheet on cryptography by HUO Academy (huoacademy.com): basics, symmetric vs asymmetric, classic vs modern, symmetric encryption, asymmetric encryption, and a list of cryptographic attacks. Not an exam paper; no exam, post or date. |
| Extraction | The PDF has no text layer (every page is an image). Each page was rendered to PNG with PyMuPDF and transcribed by reading the image. Icons and decorative graphics are omitted; diagram flows are written with arrows. Spelling follows the sheet (for example "Assymetric" in the page 2 title, "Encrypetric" on page 5). |

## Page 1

### Cryptography and its Types

#### What is Cryptography?

Cryptography is the process of protecting information and communication by converting readable data (plaintext) into an unreadable form (ciphertext) so that unauthorized users cannot understand it.

It ensures:

- Data Confidentiality
- Data Integrity
- Authentication
- Non-repudiation

**Simple Example**

Original Message (Plaintext): HELLO → [lock] → After Encryption (Ciphertext): XJ82@P

Only authorized users with the correct key can convert it back to the original message.

#### Objectives of Cryptography

1. Confidentiality – Protect data from unauthorized access
2. Integrity – Ensure data is not modified
3. Authentication – Verify the identity of users
4. Non-repudiation – Prevent sender from denying the action

#### Basic Cryptography Process

Plaintext → Encryption → Ciphertext → Decryption → Plaintext

#### Components of Cryptography

| # | Component | Description | Example / Types |
|---|---|---|---|
| 01 | Plaintext | The original readable message or data. | Example: Bank Password |
| 02 | Ciphertext | The encrypted unreadable form of plaintext. | Example: A7D9K2P |
| 03 | Encryption Algorithm | A mathematical process used to convert plaintext into ciphertext. | Examples: AES, DES, RSA |
| 04 | Decryption Algorithm | The process of converting ciphertext back into plaintext. | |
| 05 | Key | A secret value used during encryption and decryption. | Types: Public Key, Private Key, Secret Key |
| 06 | Sender | The person or system sending encrypted data. | |
| 07 | Receiver | The authorized person or system receiving and decrypting the data. | |

#### Types of Cryptography

**1. Symmetric Key Cryptography**

In this method, the same key is used for both encryption and decryption.

Plaintext → Secret Key → Ciphertext
Ciphertext → Same Secret Key → Plaintext

- Features: Fast, Simple, Suitable for large data
- Advantages: High speed, Less computational power
- Disadvantages: Key sharing is difficult, Less secure for large networks
- Examples: AES, DES, Blowfish
- Real-Life Uses: File encryption, Database protection, Wi-Fi security

**2. Asymmetric Key Cryptography**

Uses two different keys: Public Key and Private Key.

Public Key → Encryption
Private Key → Decryption

- Features: More secure, Solves key distribution problem
- Advantages: Better security, Supports digital signature
- Disadvantages: Slower than symmetric encryption, Requires more processing power
- Examples: RSA, ECC, Diffie-Hellman
- Real-Life Uses: SSL/TLS, Digital signatures, Secure email

**3. Hash Functions (Hash Cryptography)**

Converts data into a fixed-size hash value.

Data → Hash Function → #A7B3C9D2 (E.g. SHA-256)

- Features: One-way process, Cannot easily reverse original data
- Advantages: Ensures integrity, Fast verification
- Disadvantages: Cannot recover original message
- Examples: SHA-256, MD5, SHA-1
- Real-Life Uses: Password storage, Blockchain, Data integrity checking

*huoacademy.com — 01*

## Page 2

### Symmetric vs Assymetric

#### Symmetric vs Assymetric Cryptography

| Feature | Symmetric | Asymmetric |
|---|---|---|
| Number of Keys | One key | Two keys |
| Speed | Faster | Slower |
| Security | Less secure | More secure |
| Key Sharing | Difficult | Easier |
| Examples | AES, DES | RSA, ECC |

#### Applications of Cryptography

- Online Banking
- ATM Transactions
- E-commerce
- Secure Messaging
- Digital Signatures
- Blockchain
- Government Security Systems
- Password Protection

#### Common Cryptographic Attacks

1. Brute Force Attack – Trying all possible keys.
2. Man-in-the-Middle Attack – Attacker secretly intercepts communication.
3. Phishing – Tricking users to reveal secret information.
4. Dictionary Attack – Using common password lists to crack passwords.

*huoacademy.com — 02*

## Page 3

### Classic Cryptography vs Modern Cryptography

| Feature | Classic Cryptography | Modern Cryptography |
|---|---|---|
| Definition | Old traditional encryption techniques used in ancient times | Advanced computer-based encryption techniques used today |
| Technique | Mainly substitution and transposition methods | Mathematical algorithms and digital encryption |
| Key Usage | Usually single key | Single key or public-private key |
| Security Level | Less secure | Highly secure |
| Processing | Manual or simple mechanical process | Computerized and automated process |
| Speed | Slow | Fast and efficient |
| Complexity | Simple algorithms | Complex mathematical algorithms |
| Data Type | Mainly text messages | Text, audio, video, files, databases |
| Attack Resistance | Easy to break | Difficult to break |
| Examples | Caesar Cipher, Vigenère Cipher | AES, RSA, DES, ECC |

*huoacademy.com — 03*

## Page 4

### Symmetric Encryption

Symmetric Encryption is a cryptographic technique where the **same secret key** is used for both encryption and decryption.

It is also called:

- Secret Key Cryptography
- Private Key Cryptography

#### Block Diagram

Plaintext → Encryption (Secret Key) → Ciphertext
Ciphertext → Decryption (Same Secret Key) → Plaintext

#### Encryption Formula

C = E(P, K)

Where: P = Plaintext; K = Secret Key; C = Ciphertext

#### Decryption Formula

P = D(C, K)

#### How Symmetric Encryption Works (Step-by-Step Procedure)

1. Sender writes plaintext
2. Plaintext is encrypted using a secret key
3. Ciphertext is transmitted
4. Receiver uses the same key to decrypt
5. Original plaintext is recovered

#### Methods (Types) of Symmetric Encryption

**Block Cipher** — Encrypts data in fixed-size blocks.

- Features: Data divided into blocks; Each block encrypted separately
- Examples: AES, DES, Blowfish
- Example: BLOCK 1 → Encrypt → BLOCK 2 → Encrypt → BLOCK 3 → …

**Stream Cipher** — Encrypts data one bit or one byte at a time.

- Features: Continuous encryption; Faster for streaming data
- Examples: RC4, Salsa20
- Example: H → Encrypt → E → Encrypt → L → Encrypt → L → Encrypt → O → …

#### Popular Symmetric Encryption Algorithms

| Algorithm | Key Size | Features |
|---|---|---|
| DES | 56-bit | Older and less secure |
| 3DES | 168-bit | Improved DES |
| AES | 128/192/256-bit | Highly secure and modern |
| Blowfish | 32–448-bit | Fast and flexible |
| RC4 | Variable | Stream cipher |

#### Advantages of Symmetric Encryption

1. High speed
2. Efficient for large data
3. Less computational power required
4. Simple implementation
5. Suitable for real-time communication

#### Disadvantages of Symmetric Encryption

1. Key distribution problem
2. Difficult key management in large networks
3. If key is leaked, security is broken
4. No direct support for digital signature
5. Less secure than asymmetric encryption for internet communication

#### Applications of Symmetric Encryption

- File encryption
- Database protection
- VPN security
- Wi-Fi security
- Cloud storage protection
- ATM transaction systems
- Banking systems

#### Real-Life Example

AES (Advanced Encryption Standard): AES is the most widely used symmetric encryption algorithm.

Used in: Online banking; WhatsApp encryption; Government systems; Military communication

#### Symmetric Encryption Flow Example

Message: "HELLO" → Secret Key: 15 → Encryption → Ciphertext "XJ82@P" → Decryption → Original Message "HELLO"

*huoacademy.com — 04*

## Page 5

### Asymmetric Encryption

Asymmetric Encryption is a cryptographic method where two different keys are used:

- Public Key → Used for encryption
- Private Key → Used for decryption

It is also called: Public Key Cryptography

#### Basic Concept

Public Key → Encrypt Data
Private Key → Decrypt Data

The public key can be shared openly, but the private key must remain secret.

#### Block Diagram

Plaintext → Encryption (Public Key) → Ciphertext
Ciphertext → Decryption (Private Key) → Plaintext

#### Encryption Formula

C = E(P, PU)

Where: P = Plaintext; PU = Public Key; C = Ciphertext

#### Decryption Formula

P = D(C, PR)

Where: C = Ciphertext; PR = Private Key; P = Plaintext

#### How Asymmetric Encrypetric Works (Step-by-Step Procedure)

(The sheet numbers these steps 1, 3, 4, 5; the first step has no number.)

- Receiver generates: Public Key, Private Key
- 1: Receiver shares the public key publicly.
- 3: Sender encrypts the message using the receiver's public key.
- 4: Encrypted ciphertext is sent.
- 5: Receiver decrypts the ciphertext using the private key.

#### Types / Methods of Asymmetric Encryption

**1. RSA (Rivest-Shamir-Adleman)** — Most widely used asymmetric algorithm.

- Features: Uses large prime numbers; Highly secure
- Applications: Secure web communication; Digital signatures

**2. ECC (Elliptic Curve Cryptography)**

- Features: Smaller key size; Faster than RSA; Strong security
- Applications: Mobile devices; IoT security

**3. Diffie-Hellman Key Exchange**

- Features: Used for secure key exchange; Does not directly encrypt messages
- Applications: VPN; SSL/TLS

#### Advantages of Asymmetric Encryption

1. Higher security
2. Solves key distribution problem
3. Supports digital signatures
4. Enables authentication
5. Suitable for internet communication

#### Disadvantages of Asymmetric Encryption

1. Slower than symmetric encryption
2. Requires more computational power
3. Complex implementation
4. Not efficient for large data encryption

#### Applications of Asymmetric Encryption

- Online banking
- SSL/TLS websites
- Secure email
- Digital signatures
- E-commerce security
- Cryptocurrency systems

#### Real-Life Example

RSA Algorithm. RSA is commonly used in: HTTPS websites; Secure login systems; Digital certificates

#### Working Example

Suppose: Public Key = shared openly; Private Key = kept secret.

Process: "HELLO" → Encrypt using Public Key → Ciphertext → Decrypt using Private Key → "HELLO"

Only the private key holder can read the original message.

*huoacademy.com — 05*

## Page 6

### List of Cryptographic Attack

A cryptographic attack is an attempt to break a cryptographic system, steal secret information, discover encryption keys, or access protected data without authorization.

#### Major Types of Cryptographic Attacks

| # | Attack Name | Main Target |
|---|---|---|
| 1 | Brute Force Attack | Encryption key |
| 2 | Dictionary Attack | Passwords |
| 3 | Ciphertext-Only Attack | Ciphertext |
| 4 | Known-Plaintext Attack | Plaintext-ciphertext pairs |
| 5 | Chosen-Plaintext Attack | Encryption system |
| 6 | Chosen-Ciphertext Attack | Decryption system |
| 7 | Man-in-the-Middle Attack | Communication channel |
| 8 | Replay Attack | Authentication process |
| 9 | Birthday Attack | Hash functions |
| 10 | Side-Channel Attack | Physical implementation |
| 11 | Phishing Attack | User credentials |
| 12 | SQL Injection | Database systems |
| 13 | Trojan Horse | Computer systems |
| 14 | Eavesdropping | Network communication |

**1. Brute Force Attack**
Definition: An attacker tries all possible keys or passwords until the correct one is found.
Features: Simple attack method; Time-consuming.
Example: Trying every possible ATM PIN combination.
Prevention: Strong passwords; Long encryption keys.

**2. Dictionary Attack**
Definition: Uses a list of common passwords and dictionary words to crack passwords.
Example: Trying: 123456, password, admin.
Prevention: Use complex passwords; Multi-factor authentication.

**3. Ciphertext-Only Attack (COA)**
Definition: The attacker only has access to ciphertext and tries to determine plaintext or keys.
Target: Encrypted messages only (e.g. A7D9K2P#Q9L).
Prevention: Strong encryption algorithms; Randomized encryption.

**4. Known-Plaintext Attack (KPA)**
Definition: The attacker has the plaintext and the corresponding ciphertext and uses them to discover the key.
Example: Knowing HELLO → KHOOR.
Prevention: Advanced encryption algorithms; Frequent key changes.

**5. Chosen-Plaintext Attack (CPA)**
Definition: The attacker chooses plaintexts and observes the produced ciphertexts to break encryption.
Example: Testing encryption behavior with selected inputs.
Prevention: Secure encryption modes; Random padding.

**6. Chosen-Ciphertext Attack (CCA)**
Definition: The attacker chooses ciphertexts and studies decrypted outputs.
Prevention: Secure decryption protocols; Authentication mechanisms.

**7. Man-in-the-Middle Attack (MITM)**
Sender ↔ attacker ↔ Receiver.
Definition: An attacker secretly intercepts communication between two parties.
Example: Fake Wi-Fi hotspot stealing login information.
Prevention: SSL/TLS; VPN; Authentication certificates.

**8. Replay Attack**
Definition: An attacker captures valid transmitted data and retransmits it later.
Example: Reusing captured login session data.
Prevention: Timestamps; One-time passwords (OTP).

**9. Birthday Attack**
Definition: A cryptographic attack against hash functions using hash collisions.
Target: Hash algorithms like MD5 or SHA-1.
Prevention: Strong hash functions; SHA-256 or higher.

**10. Side-Channel Attack**
Definition: Uses physical information from a system: power consumption; timing information; electromagnetic leakage.
Prevention: Hardware protection; Constant-time algorithms.

**11. Phishing Attack**
Definition: Fake emails or websites trick users into revealing sensitive information.
Example: Fake bank login page.
Prevention: User awareness; Secure websites.

**12. SQL Injection Attack**
Definition: Malicious SQL commands are inserted into application inputs.
Example: Accessing database without authorization: `' OR '1'='1`
Prevention: Prepared statements; Input validation.

**13. Trojan Horse Attack**
Definition: Malicious software disguised as legitimate software.
Prevention: Antivirus software; Trusted downloads.

**14. Eavesdropping Attack**
Definition: Secretly listening to private communication.
Prevention: Encryption; Secure communication channels.

*huoacademy.com — 06*
