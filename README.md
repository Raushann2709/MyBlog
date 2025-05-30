# MyBlog
# 🌐 kerela-raushan – Static Website Hosted on AWS S3

## 📌 Project Overview

This is my **final project for the BlacBucks program**, where I was tasked with building a **static website** and hosting it using **Amazon Web Services (AWS)** through **S3 static website hosting**.

The website showcases the culture, beauty, and tourist attractions of **Kerala**, designed with clean frontend technologies and deployed on a cloud platform for public access.

---

## 🚀 Features

* Static blog with responsive design
* Fast loading with lightweight assets
* Hosted publicly via AWS S3
* Organized and easy-to-navigate structure

---

## 📁 Folder Structure

```
my-static-blog/
├── index.html
├── style.css
├── script.js
├── itineraries/
│   ├── 7-day-classic.html
│   └── 10-day-complete.html
└── images/
    ├── kerala1.jpg
    ├── backwaters.png
    └── food.jpg

---

## 🛠️ Tools & Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Cloud Hosting:** Amazon S3
* **Code Editor:** Visual Studio Code
* **Cloud Console:** AWS Management Console

---

## 🧑‍💻 Deployment Instructions

1. **Create an S3 Bucket**

   * Name: `your-bucket-name`
   * Uncheck **“Block all public access”**

2. **Upload Files**

   * Upload all files inside the your folder to the root of the bucket

3. **Enable Static Website Hosting**

   * Go to bucket **Properties → Static website hosting**
   * Enable it and set:

     * Index document: `index.html`

4. **Set Bucket Policy**

   * Go to **Permissions → Bucket Policy** and add:

     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Sid": "PublicReadGetObject",
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::your-bucket-name/*"
         }
       ]
     }
     ```

5. **Access Your Website**

   * Open the **S3 static website endpoint** provided in the bucket settings

---

## ⚠️ Common Issues & Fixes

| Issue                 | Fix                                                               |
| --------------------- | ----------------------------------------------------------------- |
| 404 Not Found Error   | Make sure `index.html` is present at the root level of the bucket |
| Images not displaying | Check image paths and ensure images are publicly accessible       |
| CSS/JS not applied    | Verify file links and confirm they’re uploaded and accessible     |

---

## 📸 Screenshots

![Screenshot (629)](https://github.com/user-attachments/assets/73712c11-ac4e-4425-9b64-c6e2ee359231)
![Screenshot (630)](https://github.com/user-attachments/assets/0707c162-8ec8-4b46-b6d0-5bccf34a34a4)


---

## 📄 License

This project was completed as part of the **BlacBucks final assignment** and is for educational and demonstration purposes only.


