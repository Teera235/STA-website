# KLONAS Team Page

## Overview
หน้าเว็บไซต์สำหรับทีม KLONAS (KMUTT Low Orbital Nano Satellite Development Team) ภายใต้ชมรม Space Technology Association (STA Club) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี

## Features

### 1. Hero Section
- แสดงโลโก้ KLONAS
- ชื่อทีมและคำอธิบายโดยย่อ
- ปุ่ม CTA สำหรับเรียนรู้เพิ่มเติมและพบทีม

### 2. Team Introduction
- ประวัติการก่อตั้งทีม
- วัตถุประสงค์หลักของทีม
- โอกาสสำหรับสมาชิก
- ข้อมูลที่ปรึกษาและสถานที่ทำงาน

### 3. System Overview
แบ่งเป็น 3 ส่วนหลัก:

#### In-Flight Configuration
- Drone (โดรนสำหรับปล่อยดาวเทียม)
- Deployment Mechanism (กลไกปล่อยดาวเทียม)
- Parachute (ร่มชูชีพ)
- CUBESAT-1U PHASE 1D
- Research Payload

#### Ground Segment
- Yagi-Uda Antenna
- Auto Tracking System
- Dashboard
- Database Systems

#### CubeSat Systems
- Frame Structure
- Solar Panel
- PCBs
- Flight Software

### 4. Team Plan (Phases)
แสดงแผนการพัฒนา 6 เฟส:
- Phase 1F: Prototype Funding
- Phase 1D: Prototype Development (ปัจจุบัน)
- Phase 2F: HAB Funding
- Phase 2D: HAB Development
- Phase 3F: LEO Funding
- Phase 3D: LEO Development

### 5. Team Structure
แสดงโครงสร้างทีมแบ่งเป็น:

#### Engineering Subsystems
- ADCS Team
- Electrical Team
- Onboard Computer & Flight Software Team
- Communications & Ground Segment Team
- Structure & Thermal Team
- Payload Team

#### Team Support
- Documentation Team
- PR & Outreach Team
- Finance Team

### 6. Team Members
- ข้อกำหนดการเป็นสมาชิก
- แกลเลอรี่รูปภาพทีม
- ข้อมูลการติดต่อ

## Routes
- `/klonas` - หน้าหลักของทีม KLONAS

## Navigation
เพิ่มลิงก์ "KLONAS" ใน Navbar ทั้งเวอร์ชัน Desktop และ Mobile

## Assets
### Images
- `/klonas-logo.png` - โลโก้ทีม KLONAS
- `/deployment/*.png` - รูปภาพระบบต่างๆ (13 รูป)
- `/team/*.jpg` - รูปภาพสมาชิกทีม (10 รูป)

## Components
- `KlonasHero.jsx` - Hero section
- `KlonasAbout.jsx` - ข้อมูลเกี่ยวกับทีม
- `KlonasOverview.jsx` - ภาพรวมระบบ
- `KlonasPhases.jsx` - แผนการพัฒนา
- `KlonasTeamStructure.jsx` - โครงสร้างทีม
- `KlonasTeamMembers.jsx` - สมาชิกทีม

## Technologies
- React
- React Router
- Framer Motion (animations)
- Tailwind CSS

## Running the Website
```bash
cd sta-website
npm install
npm run dev
```

เว็บไซต์จะรันที่ http://localhost:5173
