from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import sqlite3
import os
import random
from datetime import datetime

app = Flask(__name__)
CORS(app)

task_mapping = {
    "Kitchen Duty": ["cook", "chef", "baker", "kitchen", "caterer", "culinary"],
    "Sanitation": ["cleaner", "sweeper", "janitor", "maid", "housekeeper", "custodian"],
    "Garden Maintenance": ["gardener", "farmer", "landscaper", "horticulturist", "botanist", "agriculture"],
    "Vehicle Maintenance": ["mechanic", "technician", "repairman", "automobile", "garage", "engineer"],
    "Clerical Work": ["clerk", "assistant", "typist", "secretary", "data entry", "office"],
    "Library Assistant": ["teacher", "librarian", "professor", "tutor", "educator", "instructor"],
    "Infirmary Assistant": ["nurse", "doctor", "paramedic", "healthcare", "medical", "hospital"],
    "Security Assistant": ["guard", "watchman", "security", "bouncer", "patrol", "sentinel"],
    "Electrical Maintenance": ["electrician", "wireman", "technician", "circuit", "light", "electrical"],
    "Plumbing Maintenance": ["plumber", "pipe", "drain", "water", "sewer", "fittings"],
    "Construction Helper": ["labour", "builder", "mason", "contractor", "construct", "bricklayer"],
    "Wall Painting": ["painter", "artist", "designer", "illustrator", "wall", "colorist"],
    "Canteen Helper": ["waiter", "server", "host", "cafe", "restaurant", "bar"],
    "Workshop Repairs": ["fitter", "welder", "fabricator", "machinist", "repair", "forge"],
    "Inventory Management": ["storekeeper", "warehouse", "inventory", "stock", "sales", "retail"],
    "Tailoring": ["tailor", "seamstress", "fashion", "stitch", "clothes", "designer"],
    "Digital Records": ["software", "developer", "coder", "it", "data", "computer"],
    "Art & Craft Unit": ["sculptor", "artisan", "craft", "molder", "carver", "handicraft"],
    "Farm Duty": ["agriculture", "crop", "soil", "tractor", "planting", "harvest"],
    "Legal Documentation Helper": ["lawyer", "advocate", "attorney", "legal", "paralegal", "court"],
    "Laundry Services": ["washer", "laundry", "ironer", "press", "steam", "dry clean"],
    "Animal Care": ["vet", "zookeeper", "pet", "animal", "caretaker", "stable"],
    "Record Keeping": ["manager", "file", "register", "ledger", "database", "admin"],
    "Logistics Helper": ["driver", "transporter", "carrier", "mover", "truck", "dispatch"],
    "Recreation Coordinator": ["coach", "trainer", "sports", "fitness", "gym", "instructor"]
}

crime_db = {
    "123456789012": [("Theft", 2015), ("Robbery", 2018)],
    "987654321098": [("Fraud", 2020)],
    "112233445566": [("Drug Possession", 2019), ("Assault", 2021)],
    "221144336655": [("Cyber Crime", 2022)],
    "667788990011": [("Forgery", 2016)],
    "556677889900": [("Murder", 2014)],
    "445566778899": [("Smuggling", 2017)],
    "998877665544": [("Burglary", 2019)],
    "110022003300": [("Kidnapping", 2023)],
    "334455667788": [("Bribery", 2018)],
    "101010101010": [("Tax Evasion", 2015)],
    "121212121212": [("Human Trafficking", 2017)],
    "131313131313": [("Animal Cruelty", 2019)],
    "141414141414": [("Money Laundering", 2021)],
    "151515151515": [("Illegal Arms Possession", 2020)],
    "161616161616": [("Trespassing", 2016)],
    "171717171717": [("Cyber Fraud", 2022)],
    "181818181818": [("Chain Snatching", 2018)],
    "191919191919": [("Counterfeiting", 2015)],
    "202020202020": [("Bank Robbery", 2024)]
}

@app.route("/assign-task", methods=["POST"])
def assign_task():
    data = request.get_json()
    job_desc = data.get("job", "").lower()
    assigned_task = "General Labor"
    for task, keywords in task_mapping.items():
        if any(keyword in job_desc for keyword in keywords):
            assigned_task = task
            break
    return jsonify({"assigned_task": assigned_task})

DB_PATH = "prisoners.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS prisoners (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        dob TEXT NOT NULL,
                        age INTEGER NOT NULL,
                        job TEXT NOT NULL,
                        assigned_task TEXT NOT NULL,
                        aadhaar TEXT NOT NULL,
                        crime TEXT,
                        case_id TEXT NOT NULL)''')
    conn.commit()
    conn.close()

init_db()

@app.route('/crime-history', methods=['POST'])
def get_crime_history():
    data = request.get_json()
    aadhaar = data['aadhaar']
    return jsonify({"crimes": [f"{crime} ({year})" for crime, year in crime_db.get(aadhaar, [])]})

def send_email_to_lawyers(prisoner_name, crime, age):
    sender_email = "premasrikavuru04@gmail.com"
    sender_password = "mbjv falp vwez hvkt"  # Use Gmail App Password

    recipients = [
        "premasrikavuru05@gmail.com",
        "sravyasrikavuru4627@gmail.com",
        "ns.sri3636@gmail.com"
    ]

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.set_debuglevel(1)  # Logs email interaction for debugging
        server.starttls()
        server.login(sender_email, sender_password)
    except Exception as e:
        return f"Failed to connect or login to SMTP server: {str(e)}"

    failures = []

    for recipient in recipients:
        try:
            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = recipient
            msg['Subject'] = f"Request for Lawyer: {prisoner_name}"
            body = f"""
            Dear Public Lawyer,

            A new prisoner is looking for legal assistance.
            Name: {prisoner_name} 
            Age: {age}
            Crime committed: {crime}

            Kindly consider taking this case.

            Regards,
            Jail System
            """
            msg.attach(MIMEText(body, 'plain'))
            server.sendmail(sender_email, recipient, msg.as_string())
        except Exception as e:
            failures.append((recipient, str(e)))

    server.quit()

    if failures:
        return f"Failed to send to: {failures}"
    return "Emails sent successfully"

@app.route('/save-prisoner', methods=['POST'])
def save_prisoner():
    data = request.get_json()
    case_id = f"CASE-{random.randint(1000, 9999)}-{datetime.now().strftime('%Y%m%d%H%M%S')}"

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute('''INSERT INTO prisoners (name, dob, age, job, assigned_task, aadhaar, crime, case_id)
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?)''', (
                              data["name"], data["dob"], data["age"], data["job"],
                              data["assignedTask"], data["aadhaar"], data["crime"], case_id
                          ))
        conn.commit()
        conn.close()
    except Exception as e:
        return jsonify({"message": "Error saving prisoner details", "error": str(e)}), 500

    email_status = ""
    if data.get("hasLawyer", "yes") == "no":
        email_status = send_email_to_lawyers(data["name"], data["crime"], data["age"])

    return jsonify({
        "message": "Prisoner details submitted successfully.",
        "case_id": case_id,
        "email_status": email_status
    })

if __name__ == "__main__":
    app.run(debug=True)