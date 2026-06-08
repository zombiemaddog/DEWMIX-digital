const LANGUAGE_STORAGE_KEY = 'dewmix-language';
const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    lang: 'en',
    title: 'DEWMIX Digital | Websites, IT Systems, AI & Secure Digital Operations',
    description:
      'DEWMIX Digital is a Germany-backed full IT solutions company for websites, IT systems, automation, media, AI, support, and secure digital operations.',
    text: {
      'Skip to content': 'Skip to content',
      Problems: 'Problems',
      Services: 'Services',
      Stack: 'Stack',
      Work: 'Work',
      Contact: 'Contact',
      'Start a project': 'Start a project',
      'Germany-backed full IT solutions': 'Germany-backed full IT solutions',
      'Websites, IT systems, AI, and digital content from one accountable team.':
        'Websites, IT systems, AI, and digital content from one accountable team.',
      'DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and manual admin with a secure, polished digital operation.':
        'DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and manual admin with a secure, polished digital operation.',
      'Germany-backed delivery standards': 'Germany-backed delivery standards',
      'Websites, IT, AI, media, and support under one roof': 'Websites, IT, AI, media, and support under one roof',
      'Built for businesses that need things to work, not just look good':
        'Built for businesses that need things to work, not just look good',
      'Explore services': 'Explore services',
      'Operational partner': 'Operational partner',
      Presence: 'Presence',
      'Website, brand, content, search basics': 'Website, brand, content, search basics',
      Infrastructure: 'Infrastructure',
      'Devices, email, domains, networks': 'Devices, email, domains, networks',
      Automation: 'Automation',
      'AI assistants, workflows, admin reduction': 'AI assistants, workflows, admin reduction',
      Protection: 'Protection',
      'Security, backup, access, data hygiene': 'Security, backup, access, data hygiene',
      Support: 'Support',
      'Monitoring, maintenance, improvements': 'Monitoring, maintenance, improvements',
      'Website live': 'Website live',
      'Backups planned': 'Backups planned',
      'Alerts visible': 'Alerts visible',
      Bars: 'Bars',
      Restaurants: 'Restaurants',
      Hotels: 'Hotels',
      Retail: 'Retail',
      'Small business': 'Small business',
      Startups: 'Startups',
      'Property management': 'Property management',
      'Professional services': 'Professional services',
      'The messy middle': 'The messy middle',
      'DEWMIX turns disconnected daily chaos into an operation people can trust.':
        'DEWMIX turns disconnected daily chaos into an operation people can trust.',
      'Most businesses do not have one problem. They have a chain reaction: the website is weak, accounts are scattered, staff share information in chats, backups are unclear, and nobody owns the full picture.':
        'Most businesses do not have one problem. They have a chain reaction: the website is weak, accounts are scattered, staff share information in chats, backups are unclear, and nobody owns the full picture.',
      'Before DEWMIX': 'Before DEWMIX',
      'WhatsApp chaos and repeated customer questions': 'WhatsApp chaos and repeated customer questions',
      'Outdated website with unclear calls to action': 'Outdated website with unclear calls to action',
      'Random suppliers, logins, domains, and devices': 'Random suppliers, logins, domains, and devices',
      'No visible backup, monitoring, or handover process': 'No visible backup, monitoring, or handover process',
      'After DEWMIX': 'After DEWMIX',
      'Organised systems, documented access, and clean ownership': 'Organised systems, documented access, and clean ownership',
      'Premium website, content, and conversion-ready journeys': 'Premium website, content, and conversion-ready journeys',
      'Practical AI workflows for enquiries and admin follow-up': 'Practical AI workflows for enquiries and admin follow-up',
      'Support process, monitoring visibility, and recovery planning': 'Support process, monitoring visibility, and recovery planning',
      Capabilities: 'Capabilities',
      'One accountable team across the parts that normally get split apart.':
        'One accountable team across the parts that normally get split apart.',
      'Each capability has a job in the story: attract customers, run the business, protect the operation, reduce manual work, and keep improving after launch.':
        'Each capability has a job in the story: attract customers, run the business, protect the operation, reduce manual work, and keep improving after launch.',
      ATTRACT: 'ATTRACT',
      'Websites, apps, and content': 'Websites, apps, and content',
      'Premium pages, landing journeys, booking or quote flows, local search basics, social assets, flyers, video, animation, and sound.':
        'Premium pages, landing journeys, booking or quote flows, local search basics, social assets, flyers, video, animation, and sound.',
      OPERATE: 'OPERATE',
      'Business IT foundations': 'Business IT foundations',
      'Devices, domains, email, cloud storage, network setup, access cleanup, documentation, handover notes, and supplier consolidation.':
        'Devices, domains, email, cloud storage, network setup, access cleanup, documentation, handover notes, and supplier consolidation.',
      AUTOMATE: 'AUTOMATE',
      'AI workflows and admin relief': 'AI workflows and admin relief',
      'Customer-service assistants, FAQ flows, lead routing, reminders, staff workflows, internal knowledge, and controlled human handover.':
        'Customer-service assistants, FAQ flows, lead routing, reminders, staff workflows, internal knowledge, and controlled human handover.',
      PROTECT: 'PROTECT',
      'Security, backup, and support': 'Security, backup, and support',
      'Risk cleanup, permissions, backup planning, monitoring visibility, maintenance routines, escalation paths, and ongoing improvements.':
        'Risk cleanup, permissions, backup planning, monitoring visibility, maintenance routines, escalation paths, and ongoing improvements.',
      'Technology ecosystem': 'Technology ecosystem',
      'The strongest results happen when the website, systems, automation, content, and support are designed together.':
        'The strongest results happen when the website, systems, automation, content, and support are designed together.',
      'DEWMIX uses the technology map as a planning tool, not decoration. It shows how every customer touchpoint connects to the infrastructure behind it and the support process that keeps it dependable.':
        'DEWMIX uses the technology map as a planning tool, not decoration. It shows how every customer touchpoint connects to the infrastructure behind it and the support process that keeps it dependable.',
      Websites: 'Websites',
      Networking: 'Networking',
      Security: 'Security',
      Cloud: 'Cloud',
      Content: 'Content',
      'Front door': 'Front door',
      'Website, content, booking, quote, and lead capture.': 'Website, content, booking, quote, and lead capture.',
      'Operating core': 'Operating core',
      'Email, devices, cloud, files, access, and network.': 'Email, devices, cloud, files, access, and network.',
      'Automation layer': 'Automation layer',
      'AI assistants, follow-up, FAQs, routing, and admin relief.': 'AI assistants, follow-up, FAQs, routing, and admin relief.',
      'Control room': 'Control room',
      'Security, backups, monitoring, reporting, and support.': 'Security, backups, monitoring, reporting, and support.',
      'Directed delivery': 'Directed delivery',
      'A clear path from problem to controlled launch.': 'A clear path from problem to controlled launch.',
      'DEWMIX avoids the usual supplier handoff by making discovery, build, launch, and support part of one managed journey.':
        'DEWMIX avoids the usual supplier handoff by making discovery, build, launch, and support part of one managed journey.',
      'Find the friction': 'Find the friction',
      'We identify what is costing time, trust, sales, or operational confidence.':
        'We identify what is costing time, trust, sales, or operational confidence.',
      'Prioritise the first win': 'Prioritise the first win',
      'We separate urgent fixes from nice-to-have ideas so progress starts without creating new risk.':
        'We separate urgent fixes from nice-to-have ideas so progress starts without creating new risk.',
      'Build the connected layer': 'Build the connected layer',
      'We design and configure the website, IT, automation, content, and protection pieces that belong together.':
        'We design and configure the website, IT, automation, content, and protection pieces that belong together.',
      'Document the handover': 'Document the handover',
      'We leave the business with cleaner ownership, clearer access, practical notes, and fewer mysteries.':
        'We leave the business with cleaner ownership, clearer access, practical notes, and fewer mysteries.',
      'Support the evolution': 'Support the evolution',
      'We keep the system visible, maintained, and ready for the next improvement.':
        'We keep the system visible, maintained, and ready for the next improvement.',
      'Real-world scenarios': 'Real-world scenarios',
      'Concrete outcomes for businesses that need more than advice.': 'Concrete outcomes for businesses that need more than advice.',
      'Thailand agility, German engineering standards, and UK software perspective working as one delivery model.':
        'Thailand agility, German engineering standards, and UK software perspective working as one delivery model.',
      'New bar opening': 'New bar opening',
      'Launch the venue with a digital foundation already in place.': 'Launch the venue with a digital foundation already in place.',
      'DEWMIX builds the launch website, menu or booking journey, Google-ready basics, staff email, Wi-Fi/network setup, opening content, and a support handover.':
        'DEWMIX builds the launch website, menu or booking journey, Google-ready basics, staff email, Wi-Fi/network setup, opening content, and a support handover.',
      'Existing business rescue': 'Existing business rescue',
      'Stabilise a messy setup without stopping daily operations.': 'Stabilise a messy setup without stopping daily operations.',
      'We clean domains, accounts, access, files, backups, outdated pages, supplier confusion, and documentation so the business can move forward safely.':
        'We clean domains, accounts, access, files, backups, outdated pages, supplier confusion, and documentation so the business can move forward safely.',
      'AI automation deployment': 'AI automation deployment',
      'Reduce repeated work while keeping people in control.': 'Reduce repeated work while keeping people in control.',
      'We map enquiries, FAQs, follow-ups, internal reminders, lead routing, and human handover so automation improves service instead of creating noise.':
        'We map enquiries, FAQs, follow-ups, internal reminders, lead routing, and human handover so automation improves service instead of creating noise.',
      'Why it works': 'Why it works',
      'Premium execution is not about adding more tools. It is about making the whole system feel intentional.':
        'Premium execution is not about adding more tools. It is about making the whole system feel intentional.',
      'DEWMIX Digital is built for owners and teams who want a dependable online presence and a calmer technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.':
        'DEWMIX Digital is built for owners and teams who want a dependable online presence and a calmer technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.',
      'Clear ownership': 'Clear ownership',
      'Secure foundations': 'Secure foundations',
      'Practical automation': 'Practical automation',
      'Long-term support': 'Long-term support',
      'Content that matches the system': 'Content that matches the system',
      'Tell DEWMIX what needs to look better, work better, or scale better.':
        'Tell DEWMIX what needs to look better, work better, or scale better.',
      'Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused first step without asking for private credentials through this form.':
        'Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused first step without asking for private credentials through this form.',
      'Website / online presence': 'Website / online presence',
      'IT setup / network': 'IT setup / network',
      'AI / automation': 'AI / automation',
      'Security / backup / monitoring': 'Security / backup / monitoring',
      'Media / content': 'Media / content',
      Name: 'Name',
      Email: 'Email',
      Organisation: 'Organisation',
      'Project focus': 'Project focus',
      'Select a focus': 'Select a focus',
      'Not sure yet': 'Not sure yet',
      'What needs fixing?': 'What needs fixing?',
      'Send consultation request': 'Send consultation request',
      'Do not send passwords or private credentials through this form.': 'Do not send passwords or private credentials through this form.',
      'Thank you. Connect this form to a secure endpoint to receive consultation requests.':
        'Thank you. Connect this form to a secure endpoint to receive consultation requests.',
      'DEWMIX Digital. All rights reserved.': 'DEWMIX Digital. All rights reserved.',
    },
    attributes: {
      'DEWMIX Digital home': 'DEWMIX Digital home',
      'Primary navigation': 'Primary navigation',
      'Language selector': 'Language selector',
      'Switch language to English': 'Switch language to English',
      'Switch language to Thai': 'Switch language to Thai',
      'Switch language to German': 'Switch language to German',
      'DEWMIX delivery strengths': 'DEWMIX delivery strengths',
      'Primary actions': 'Primary actions',
      'DEWMIX delivery stack': 'DEWMIX delivery stack',
      'DEWMIX connected operations visual': 'DEWMIX connected operations visual',
      'DEWMIX server room with secured infrastructure and operations monitoring':
        'DEWMIX server room with secured infrastructure and operations monitoring',
      'System status examples': 'System status examples',
      'DEWMIX operating focus': 'DEWMIX operating focus',
      'Before and after transformation examples': 'Before and after transformation examples',
      'Connected ecosystem layers': 'Connected ecosystem layers',
      'DEWMIX collaboration across Thailand, Germany, and the United Kingdom':
        'DEWMIX collaboration across Thailand, Germany, and the United Kingdom',
      'DEWMIX collaboration wall showing Thailand, Germany, and United Kingdom flags':
        'DEWMIX collaboration wall showing Thailand, Germany, and United Kingdom flags',
      'Footer navigation': 'Footer navigation',
    },
  },
  th: {
    lang: 'th',
    title: 'DEWMIX Digital | เว็บไซต์ ระบบ IT, AI และการดำเนินงานดิจิทัลที่ปลอดภัย',
    description:
      'DEWMIX Digital คือบริษัทโซลูชัน IT ครบวงจรที่มีมาตรฐานจากเยอรมนี สำหรับเว็บไซต์ ระบบ IT ระบบอัตโนมัติ สื่อ AI การสนับสนุน และการดำเนินงานดิจิทัลที่ปลอดภัย',
    text: {
      'Skip to content': 'ข้ามไปยังเนื้อหา',
      Problems: 'ปัญหา',
      Services: 'บริการ',
      Stack: 'ระบบ',
      Work: 'ผลงาน',
      Contact: 'ติดต่อ',
      'Start a project': 'เริ่มโปรเจกต์',
      'Germany-backed full IT solutions': 'โซลูชัน IT ครบวงจรด้วยมาตรฐานเยอรมนี',
      'Websites, IT systems, AI, and digital content from one accountable team.':
        'เว็บไซต์ ระบบ IT, AI และคอนเทนต์ดิจิทัลจากทีมเดียวที่รับผิดชอบครบถ้วน',
      'DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and manual admin with a secure, polished digital operation.':
        'DEWMIX Digital ช่วยธุรกิจเปลี่ยนจากผู้ให้บริการกระจัดกระจาย เทคโนโลยีที่ไม่น่าเชื่อถือ ตัวตนออนไลน์ที่อ่อนแอ และงานแอดมินมือ ให้เป็นการดำเนินงานดิจิทัลที่ปลอดภัยและดูมืออาชีพ',
      'Germany-backed delivery standards': 'มาตรฐานการส่งมอบจากเยอรมนี',
      'Websites, IT, AI, media, and support under one roof': 'เว็บไซต์ IT, AI, สื่อ และซัพพอร์ตในที่เดียว',
      'Built for businesses that need things to work, not just look good': 'สร้างเพื่อธุรกิจที่ต้องการระบบใช้งานได้จริง ไม่ใช่แค่ดูดี',
      'Explore services': 'ดูบริการ',
      'Operational partner': 'พาร์ตเนอร์ดูแลระบบ',
      Presence: 'ตัวตนออนไลน์',
      'Website, brand, content, search basics': 'เว็บไซต์ แบรนด์ คอนเทนต์ และพื้นฐานการค้นหา',
      Infrastructure: 'โครงสร้างพื้นฐาน',
      'Devices, email, domains, networks': 'อุปกรณ์ อีเมล โดเมน และเครือข่าย',
      Automation: 'ระบบอัตโนมัติ',
      'AI assistants, workflows, admin reduction': 'ผู้ช่วย AI เวิร์กโฟลว์ และลดงานแอดมิน',
      Protection: 'การป้องกัน',
      'Security, backup, access, data hygiene': 'ความปลอดภัย สำรองข้อมูล สิทธิ์เข้าถึง และความเรียบร้อยของข้อมูล',
      Support: 'ซัพพอร์ต',
      'Monitoring, maintenance, improvements': 'มอนิเตอร์ บำรุงรักษา และปรับปรุงต่อเนื่อง',
      'Website live': 'เว็บไซต์ออนไลน์',
      'Backups planned': 'วางแผนแบ็กอัปแล้ว',
      'Alerts visible': 'เห็นการแจ้งเตือนชัดเจน',
      Bars: 'บาร์',
      Restaurants: 'ร้านอาหาร',
      Hotels: 'โรงแรม',
      Retail: 'ค้าปลีก',
      'Small business': 'ธุรกิจขนาดเล็ก',
      Startups: 'สตาร์ทอัป',
      'Property management': 'บริหารอสังหาริมทรัพย์',
      'Professional services': 'บริการมืออาชีพ',
      'The messy middle': 'ช่วงกลางที่ยุ่งเหยิง',
      'DEWMIX turns disconnected daily chaos into an operation people can trust.':
        'DEWMIX เปลี่ยนความวุ่นวายประจำวันที่ไม่เชื่อมต่อกัน ให้เป็นระบบงานที่ทุกคนไว้ใจได้',
      'Most businesses do not have one problem. They have a chain reaction: the website is weak, accounts are scattered, staff share information in chats, backups are unclear, and nobody owns the full picture.':
        'ธุรกิจส่วนใหญ่ไม่ได้มีปัญหาเดียว แต่มีปัญหาต่อเนื่องกัน: เว็บไซต์อ่อนแอ บัญชีกระจัดกระจาย พนักงานแชร์ข้อมูลในแชต แบ็กอัปไม่ชัดเจน และไม่มีใครรับผิดชอบภาพรวมทั้งหมด',
      'Before DEWMIX': 'ก่อน DEWMIX',
      'WhatsApp chaos and repeated customer questions': 'แชต WhatsApp วุ่นวายและลูกค้าถามซ้ำ',
      'Outdated website with unclear calls to action': 'เว็บไซต์ล้าสมัยและคำกระตุ้นการตัดสินใจไม่ชัดเจน',
      'Random suppliers, logins, domains, and devices': 'ผู้ให้บริการ ล็อกอิน โดเมน และอุปกรณ์กระจัดกระจาย',
      'No visible backup, monitoring, or handover process': 'ไม่มีภาพชัดเจนเรื่องแบ็กอัป มอนิเตอร์ หรือการส่งมอบ',
      'After DEWMIX': 'หลัง DEWMIX',
      'Organised systems, documented access, and clean ownership': 'ระบบเป็นระเบียบ มีเอกสารสิทธิ์เข้าถึง และเจ้าของงานชัดเจน',
      'Premium website, content, and conversion-ready journeys': 'เว็บไซต์พรีเมียม คอนเทนต์ และเส้นทางลูกค้าที่พร้อมเปลี่ยนเป็นยอดขาย',
      'Practical AI workflows for enquiries and admin follow-up': 'เวิร์กโฟลว์ AI ที่ใช้งานได้จริงสำหรับคำถามและงานแอดมินติดตามผล',
      'Support process, monitoring visibility, and recovery planning': 'กระบวนการซัพพอร์ต ภาพรวมมอนิเตอร์ และแผนกู้คืน',
      Capabilities: 'ความสามารถ',
      'One accountable team across the parts that normally get split apart.': 'ทีมเดียวที่รับผิดชอบส่วนต่าง ๆ ที่ปกติมักถูกแยกออกจากกัน',
      'Each capability has a job in the story: attract customers, run the business, protect the operation, reduce manual work, and keep improving after launch.':
        'แต่ละความสามารถมีบทบาทชัดเจน: ดึงดูดลูกค้า เดินธุรกิจ ปกป้องระบบ ลดงานมือ และปรับปรุงต่อหลังเปิดใช้งาน',
      ATTRACT: 'ดึงดูด',
      'Websites, apps, and content': 'เว็บไซต์ แอป และคอนเทนต์',
      'Premium pages, landing journeys, booking or quote flows, local search basics, social assets, flyers, video, animation, and sound.':
        'หน้าเว็บพรีเมียม เส้นทาง Landing ระบบจองหรือขอใบเสนอราคา พื้นฐานการค้นหาท้องถิ่น สื่อโซเชียล ใบปลิว วิดีโอ แอนิเมชัน และเสียง',
      OPERATE: 'ดำเนินงาน',
      'Business IT foundations': 'พื้นฐาน IT สำหรับธุรกิจ',
      'Devices, domains, email, cloud storage, network setup, access cleanup, documentation, handover notes, and supplier consolidation.':
        'อุปกรณ์ โดเมน อีเมล พื้นที่เก็บข้อมูล Cloud ตั้งค่าเครือข่าย จัดระเบียบสิทธิ์ เอกสาร โน้ตส่งมอบ และรวมผู้ให้บริการ',
      AUTOMATE: 'อัตโนมัติ',
      'AI workflows and admin relief': 'เวิร์กโฟลว์ AI และลดภาระแอดมิน',
      'Customer-service assistants, FAQ flows, lead routing, reminders, staff workflows, internal knowledge, and controlled human handover.':
        'ผู้ช่วยบริการลูกค้า โฟลว์ FAQ การส่งต่อ Lead การแจ้งเตือน เวิร์กโฟลว์พนักงาน ความรู้ภายใน และการส่งต่อให้คนดูแลอย่างควบคุมได้',
      PROTECT: 'ปกป้อง',
      'Security, backup, and support': 'ความปลอดภัย แบ็กอัป และซัพพอร์ต',
      'Risk cleanup, permissions, backup planning, monitoring visibility, maintenance routines, escalation paths, and ongoing improvements.':
        'จัดการความเสี่ยง สิทธิ์ใช้งาน แผนแบ็กอัป ภาพรวมมอนิเตอร์ ขั้นตอนบำรุงรักษา เส้นทางยกระดับปัญหา และการปรับปรุงต่อเนื่อง',
      'Technology ecosystem': 'ระบบนิเวศเทคโนโลยี',
      'The strongest results happen when the website, systems, automation, content, and support are designed together.':
        'ผลลัพธ์ที่แข็งแรงที่สุดเกิดขึ้นเมื่อเว็บไซต์ ระบบ ระบบอัตโนมัติ คอนเทนต์ และซัพพอร์ตถูกออกแบบร่วมกัน',
      'DEWMIX uses the technology map as a planning tool, not decoration. It shows how every customer touchpoint connects to the infrastructure behind it and the support process that keeps it dependable.':
        'DEWMIX ใช้แผนที่เทคโนโลยีเป็นเครื่องมือวางแผน ไม่ใช่แค่ตกแต่ง มันแสดงว่าทุกจุดสัมผัสลูกค้าเชื่อมกับโครงสร้างพื้นฐานด้านหลัง และกระบวนการซัพพอร์ตที่ทำให้ระบบเชื่อถือได้อย่างไร',
      Websites: 'เว็บไซต์',
      Networking: 'เครือข่าย',
      Security: 'ความปลอดภัย',
      Cloud: 'Cloud',
      Content: 'คอนเทนต์',
      'Front door': 'ประตูหน้า',
      'Website, content, booking, quote, and lead capture.': 'เว็บไซต์ คอนเทนต์ การจอง ใบเสนอราคา และการเก็บ Lead',
      'Operating core': 'แกนปฏิบัติการ',
      'Email, devices, cloud, files, access, and network.': 'อีเมล อุปกรณ์ Cloud ไฟล์ สิทธิ์เข้าถึง และเครือข่าย',
      'Automation layer': 'ชั้นระบบอัตโนมัติ',
      'AI assistants, follow-up, FAQs, routing, and admin relief.': 'ผู้ช่วย AI การติดตาม FAQ การส่งต่อ และลดงานแอดมิน',
      'Control room': 'ห้องควบคุม',
      'Security, backups, monitoring, reporting, and support.': 'ความปลอดภัย แบ็กอัป มอนิเตอร์ รายงาน และซัพพอร์ต',
      'Directed delivery': 'การส่งมอบแบบมีทิศทาง',
      'A clear path from problem to controlled launch.': 'เส้นทางชัดเจนจากปัญหาสู่การเปิดใช้งานที่ควบคุมได้',
      'DEWMIX avoids the usual supplier handoff by making discovery, build, launch, and support part of one managed journey.':
        'DEWMIX ลดการส่งต่อระหว่างผู้ให้บริการ ด้วยการทำให้การค้นหาปัญหา การสร้าง การเปิดใช้งาน และการซัพพอร์ตเป็นเส้นทางเดียวที่จัดการครบ',
      'Find the friction': 'หาจุดติดขัด',
      'We identify what is costing time, trust, sales, or operational confidence.': 'เราระบุสิ่งที่ทำให้เสียเวลา ความเชื่อมั่น ยอดขาย หรือความมั่นใจในการดำเนินงาน',
      'Prioritise the first win': 'จัดลำดับชัยชนะแรก',
      'We separate urgent fixes from nice-to-have ideas so progress starts without creating new risk.':
        'เราแยกสิ่งที่ต้องแก้ด่วนออกจากไอเดียเสริม เพื่อให้เริ่มคืบหน้าได้โดยไม่สร้างความเสี่ยงใหม่',
      'Build the connected layer': 'สร้างชั้นที่เชื่อมต่อกัน',
      'We design and configure the website, IT, automation, content, and protection pieces that belong together.':
        'เราออกแบบและตั้งค่าเว็บไซต์ IT ระบบอัตโนมัติ คอนเทนต์ และส่วนป้องกันที่ควรทำงานร่วมกัน',
      'Document the handover': 'ทำเอกสารส่งมอบ',
      'We leave the business with cleaner ownership, clearer access, practical notes, and fewer mysteries.':
        'เราส่งมอบให้ธุรกิจมีเจ้าของงานชัดขึ้น สิทธิ์เข้าถึงชัดขึ้น โน้ตใช้งานจริง และเรื่องค้างคาน้อยลง',
      'Support the evolution': 'ซัพพอร์ตการพัฒนา',
      'We keep the system visible, maintained, and ready for the next improvement.': 'เราทำให้ระบบมองเห็นได้ บำรุงรักษาอยู่เสมอ และพร้อมสำหรับการปรับปรุงขั้นต่อไป',
      'Real-world scenarios': 'สถานการณ์จริง',
      'Concrete outcomes for businesses that need more than advice.': 'ผลลัพธ์ที่จับต้องได้สำหรับธุรกิจที่ต้องการมากกว่าคำแนะนำ',
      'Thailand agility, German engineering standards, and UK software perspective working as one delivery model.':
        'ความคล่องตัวแบบไทย มาตรฐานวิศวกรรมเยอรมัน และมุมมองซอฟต์แวร์จากสหราชอาณาจักร ทำงานเป็นโมเดลส่งมอบเดียว',
      'New bar opening': 'เปิดบาร์ใหม่',
      'Launch the venue with a digital foundation already in place.': 'เปิดร้านพร้อมพื้นฐานดิจิทัลที่จัดเตรียมไว้แล้ว',
      'DEWMIX builds the launch website, menu or booking journey, Google-ready basics, staff email, Wi-Fi/network setup, opening content, and a support handover.':
        'DEWMIX สร้างเว็บไซต์เปิดตัว เส้นทางเมนูหรือการจอง พื้นฐานที่พร้อมสำหรับ Google อีเมลพนักงาน ตั้งค่า Wi-Fi/เครือข่าย คอนเทนต์เปิดร้าน และการส่งมอบซัพพอร์ต',
      'Existing business rescue': 'กู้ระบบธุรกิจเดิม',
      'Stabilise a messy setup without stopping daily operations.': 'ทำให้ระบบที่ยุ่งเหยิงนิ่งขึ้น โดยไม่หยุดการทำงานประจำวัน',
      'We clean domains, accounts, access, files, backups, outdated pages, supplier confusion, and documentation so the business can move forward safely.':
        'เราจัดระเบียบโดเมน บัญชี สิทธิ์เข้าถึง ไฟล์ แบ็กอัป หน้าเว็บเก่า ความสับสนของผู้ให้บริการ และเอกสาร เพื่อให้ธุรกิจเดินหน้าต่อได้อย่างปลอดภัย',
      'AI automation deployment': 'ติดตั้งระบบอัตโนมัติ AI',
      'Reduce repeated work while keeping people in control.': 'ลดงานซ้ำโดยยังให้คนควบคุมได้',
      'We map enquiries, FAQs, follow-ups, internal reminders, lead routing, and human handover so automation improves service instead of creating noise.':
        'เราวางแผนคำถาม FAQ การติดตาม การแจ้งเตือนภายใน การส่งต่อ Lead และการส่งต่อให้คน เพื่อให้ระบบอัตโนมัติช่วยบริการแทนที่จะสร้างเสียงรบกวน',
      'Why it works': 'ทำไมถึงได้ผล',
      'Premium execution is not about adding more tools. It is about making the whole system feel intentional.':
        'การทำงานระดับพรีเมียมไม่ใช่การเพิ่มเครื่องมือ แต่คือการทำให้ทั้งระบบรู้สึกตั้งใจและสอดคล้องกัน',
      'DEWMIX Digital is built for owners and teams who want a dependable online presence and a calmer technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.':
        'DEWMIX Digital สร้างมาเพื่อเจ้าของธุรกิจและทีมที่ต้องการตัวตนออนไลน์ที่เชื่อถือได้ และฐานเทคโนโลยีที่นิ่งขึ้น โดยไม่ต้องจัดการผู้ให้บริการจำนวนมาก เรารวมดีไซน์ที่เข้าใจแบรนด์ IT ที่ใช้งานจริง การตั้งค่าที่ปลอดภัย ระบบอัตโนมัติ AI การผลิตสื่อ และซัพพอร์ตต่อเนื่องไว้ในบริการเดียวที่รับผิดชอบชัดเจน',
      'Clear ownership': 'เจ้าของงานชัดเจน',
      'Secure foundations': 'พื้นฐานปลอดภัย',
      'Practical automation': 'ระบบอัตโนมัติที่ใช้งานจริง',
      'Long-term support': 'ซัพพอร์ตระยะยาว',
      'Content that matches the system': 'คอนเทนต์ที่เข้ากับระบบ',
      'Tell DEWMIX what needs to look better, work better, or scale better.': 'บอก DEWMIX ว่าอะไรต้องดูดีขึ้น ทำงานดีขึ้น หรือขยายได้ดีขึ้น',
      'Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused first step without asking for private credentials through this form.':
        'แชร์ส่วนของการดำเนินงานที่รู้สึกอ่อนแอ ยุ่งเหยิง ล้าสมัย หรือเสี่ยง DEWMIX ช่วยกำหนดก้าวแรกที่ชัดเจนได้ โดยไม่ขอข้อมูลลับผ่านฟอร์มนี้',
      'Website / online presence': 'เว็บไซต์ / ตัวตนออนไลน์',
      'IT setup / network': 'ตั้งค่า IT / เครือข่าย',
      'AI / automation': 'AI / ระบบอัตโนมัติ',
      'Security / backup / monitoring': 'ความปลอดภัย / แบ็กอัป / มอนิเตอร์',
      'Media / content': 'สื่อ / คอนเทนต์',
      Name: 'ชื่อ',
      Email: 'อีเมล',
      Organisation: 'องค์กร',
      'Project focus': 'จุดโฟกัสของโปรเจกต์',
      'Select a focus': 'เลือกจุดโฟกัส',
      'Not sure yet': 'ยังไม่แน่ใจ',
      'What needs fixing?': 'ต้องแก้อะไร?',
      'Send consultation request': 'ส่งคำขอปรึกษา',
      'Do not send passwords or private credentials through this form.': 'อย่าส่งรหัสผ่านหรือข้อมูลลับผ่านฟอร์มนี้',
      'Thank you. Connect this form to a secure endpoint to receive consultation requests.':
        'ขอบคุณ โปรดเชื่อมต่อฟอร์มนี้กับ endpoint ที่ปลอดภัยเพื่อรับคำขอปรึกษา',
      'DEWMIX Digital. All rights reserved.': 'DEWMIX Digital สงวนลิขสิทธิ์',
    },
    attributes: {
      'DEWMIX Digital home': 'หน้าแรก DEWMIX Digital',
      'Primary navigation': 'เมนูหลัก',
      'Language selector': 'ตัวเลือกภาษา',
      'Switch language to English': 'เปลี่ยนภาษาเป็นอังกฤษ',
      'Switch language to Thai': 'เปลี่ยนภาษาเป็นไทย',
      'Switch language to German': 'เปลี่ยนภาษาเป็นเยอรมัน',
      'DEWMIX delivery strengths': 'จุดแข็งการส่งมอบของ DEWMIX',
      'Primary actions': 'การกระทำหลัก',
      'DEWMIX delivery stack': 'สแต็กการส่งมอบของ DEWMIX',
      'DEWMIX connected operations visual': 'ภาพการดำเนินงานที่เชื่อมต่อของ DEWMIX',
      'DEWMIX server room with secured infrastructure and operations monitoring':
        'ห้องเซิร์ฟเวอร์ DEWMIX พร้อมโครงสร้างพื้นฐานที่ปลอดภัยและการมอนิเตอร์การดำเนินงาน',
      'System status examples': 'ตัวอย่างสถานะระบบ',
      'DEWMIX operating focus': 'จุดโฟกัสการดำเนินงานของ DEWMIX',
      'Before and after transformation examples': 'ตัวอย่างก่อนและหลังการเปลี่ยนแปลง',
      'Connected ecosystem layers': 'ชั้นระบบนิเวศที่เชื่อมต่อกัน',
      'DEWMIX collaboration across Thailand, Germany, and the United Kingdom':
        'การทำงานร่วมกันของ DEWMIX ระหว่างไทย เยอรมนี และสหราชอาณาจักร',
      'DEWMIX collaboration wall showing Thailand, Germany, and United Kingdom flags':
        'ผนังความร่วมมือ DEWMIX ที่แสดงธงไทย เยอรมนี และสหราชอาณาจักร',
      'Footer navigation': 'เมนูท้ายเว็บไซต์',
    },
  },
  de: {
    lang: 'de',
    title: 'DEWMIX Digital | Websites, IT-Systeme, AI & sichere digitale Abläufe',
    description:
      'DEWMIX Digital ist ein Full-Service-IT-Partner mit Deutschland-gestützten Standards für Websites, IT-Systeme, Automatisierung, Medien, AI, Support und sichere digitale Abläufe.',
    text: {
      'Skip to content': 'Zum Inhalt springen',
      Problems: 'Probleme',
      Services: 'Leistungen',
      Stack: 'Stack',
      Work: 'Projekte',
      Contact: 'Kontakt',
      'Start a project': 'Projekt starten',
      'Germany-backed full IT solutions': 'Full-Service-IT-Lösungen mit deutschen Standards',
      'Websites, IT systems, AI, and digital content from one accountable team.':
        'Websites, IT-Systeme, AI und digitale Inhalte von einem verantwortlichen Team.',
      'DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and manual admin with a secure, polished digital operation.':
        'DEWMIX Digital hilft Unternehmen, verstreute Anbieter, unzuverlässige Technik, schwache Online-Präsenz und manuelle Verwaltung durch einen sicheren, professionellen digitalen Betrieb zu ersetzen.',
      'Germany-backed delivery standards': 'Lieferstandards mit deutschem Anspruch',
      'Websites, IT, AI, media, and support under one roof': 'Websites, IT, AI, Medien und Support aus einer Hand',
      'Built for businesses that need things to work, not just look good': 'Gebaut für Unternehmen, bei denen Systeme funktionieren müssen – nicht nur gut aussehen.',
      'Explore services': 'Leistungen ansehen',
      'Operational partner': 'Betriebspartner',
      Presence: 'Präsenz',
      'Website, brand, content, search basics': 'Website, Marke, Inhalte und Suchgrundlagen',
      Infrastructure: 'Infrastruktur',
      'Devices, email, domains, networks': 'Geräte, E-Mail, Domains und Netzwerke',
      Automation: 'Automatisierung',
      'AI assistants, workflows, admin reduction': 'AI-Assistenten, Workflows und weniger Admin-Aufwand',
      Protection: 'Schutz',
      'Security, backup, access, data hygiene': 'Sicherheit, Backups, Zugriff und Datenhygiene',
      Support: 'Support',
      'Monitoring, maintenance, improvements': 'Monitoring, Wartung und Verbesserungen',
      'Website live': 'Website live',
      'Backups planned': 'Backups geplant',
      'Alerts visible': 'Warnungen sichtbar',
      Bars: 'Bars',
      Restaurants: 'Restaurants',
      Hotels: 'Hotels',
      Retail: 'Einzelhandel',
      'Small business': 'Kleine Unternehmen',
      Startups: 'Startups',
      'Property management': 'Immobilienverwaltung',
      'Professional services': 'Professionelle Services',
      'The messy middle': 'Die unübersichtliche Mitte',
      'DEWMIX turns disconnected daily chaos into an operation people can trust.':
        'DEWMIX verwandelt unverbundenes Tageschaos in einen Betrieb, dem Menschen vertrauen können.',
      'Most businesses do not have one problem. They have a chain reaction: the website is weak, accounts are scattered, staff share information in chats, backups are unclear, and nobody owns the full picture.':
        'Die meisten Unternehmen haben nicht nur ein Problem. Es ist eine Kettenreaktion: Die Website ist schwach, Konten sind verstreut, Mitarbeitende teilen Informationen in Chats, Backups sind unklar und niemand verantwortet das Gesamtbild.',
      'Before DEWMIX': 'Vor DEWMIX',
      'WhatsApp chaos and repeated customer questions': 'WhatsApp-Chaos und wiederholte Kundenfragen',
      'Outdated website with unclear calls to action': 'Veraltete Website mit unklaren Handlungsaufforderungen',
      'Random suppliers, logins, domains, and devices': 'Zufällige Anbieter, Logins, Domains und Geräte',
      'No visible backup, monitoring, or handover process': 'Kein sichtbarer Backup-, Monitoring- oder Übergabeprozess',
      'After DEWMIX': 'Nach DEWMIX',
      'Organised systems, documented access, and clean ownership': 'Geordnete Systeme, dokumentierte Zugänge und klare Verantwortung',
      'Premium website, content, and conversion-ready journeys': 'Premium-Website, Inhalte und konversionsbereite Wege',
      'Practical AI workflows for enquiries and admin follow-up': 'Praktische AI-Workflows für Anfragen und Admin-Follow-up',
      'Support process, monitoring visibility, and recovery planning': 'Supportprozess, Monitoring-Transparenz und Wiederherstellungsplanung',
      Capabilities: 'Leistungsbereiche',
      'One accountable team across the parts that normally get split apart.': 'Ein verantwortliches Team für die Bereiche, die sonst getrennt werden.',
      'Each capability has a job in the story: attract customers, run the business, protect the operation, reduce manual work, and keep improving after launch.':
        'Jeder Leistungsbereich hat eine klare Aufgabe: Kunden gewinnen, den Betrieb führen, Abläufe schützen, manuelle Arbeit reduzieren und nach dem Launch weiter verbessern.',
      ATTRACT: 'GEWINNEN',
      'Websites, apps, and content': 'Websites, Apps und Inhalte',
      'Premium pages, landing journeys, booking or quote flows, local search basics, social assets, flyers, video, animation, and sound.':
        'Premium-Seiten, Landing-Journeys, Buchungs- oder Angebotsabläufe, lokale Suchgrundlagen, Social Assets, Flyer, Video, Animation und Sound.',
      OPERATE: 'BETREIBEN',
      'Business IT foundations': 'Business-IT-Grundlagen',
      'Devices, domains, email, cloud storage, network setup, access cleanup, documentation, handover notes, and supplier consolidation.':
        'Geräte, Domains, E-Mail, Cloud-Speicher, Netzwerkaufbau, Zugangsbereinigung, Dokumentation, Übergabenotizen und Konsolidierung von Anbietern.',
      AUTOMATE: 'AUTOMATISIEREN',
      'AI workflows and admin relief': 'AI-Workflows und Admin-Entlastung',
      'Customer-service assistants, FAQ flows, lead routing, reminders, staff workflows, internal knowledge, and controlled human handover.':
        'Kundenservice-Assistenten, FAQ-Flows, Lead-Routing, Erinnerungen, Mitarbeiter-Workflows, internes Wissen und kontrollierte Übergabe an Menschen.',
      PROTECT: 'SCHÜTZEN',
      'Security, backup, and support': 'Sicherheit, Backup und Support',
      'Risk cleanup, permissions, backup planning, monitoring visibility, maintenance routines, escalation paths, and ongoing improvements.':
        'Risikobereinigung, Berechtigungen, Backup-Planung, Monitoring-Transparenz, Wartungsroutinen, Eskalationswege und laufende Verbesserungen.',
      'Technology ecosystem': 'Technologie-Ökosystem',
      'The strongest results happen when the website, systems, automation, content, and support are designed together.':
        'Die stärksten Ergebnisse entstehen, wenn Website, Systeme, Automatisierung, Inhalte und Support gemeinsam entworfen werden.',
      'DEWMIX uses the technology map as a planning tool, not decoration. It shows how every customer touchpoint connects to the infrastructure behind it and the support process that keeps it dependable.':
        'DEWMIX nutzt die Technologiekarte als Planungswerkzeug, nicht als Dekoration. Sie zeigt, wie jeder Kundenkontakt mit der Infrastruktur dahinter und dem Supportprozess verbunden ist, der ihn verlässlich hält.',
      Websites: 'Websites',
      Networking: 'Netzwerk',
      Security: 'Sicherheit',
      Cloud: 'Cloud',
      Content: 'Inhalte',
      'Front door': 'Eingang',
      'Website, content, booking, quote, and lead capture.': 'Website, Inhalte, Buchung, Angebot und Lead-Erfassung.',
      'Operating core': 'Betriebskern',
      'Email, devices, cloud, files, access, and network.': 'E-Mail, Geräte, Cloud, Dateien, Zugriff und Netzwerk.',
      'Automation layer': 'Automatisierungsebene',
      'AI assistants, follow-up, FAQs, routing, and admin relief.': 'AI-Assistenten, Follow-up, FAQs, Routing und Admin-Entlastung.',
      'Control room': 'Kontrollraum',
      'Security, backups, monitoring, reporting, and support.': 'Sicherheit, Backups, Monitoring, Reporting und Support.',
      'Directed delivery': 'Geführte Umsetzung',
      'A clear path from problem to controlled launch.': 'Ein klarer Weg vom Problem zum kontrollierten Launch.',
      'DEWMIX avoids the usual supplier handoff by making discovery, build, launch, and support part of one managed journey.':
        'DEWMIX vermeidet die übliche Anbieterübergabe, indem Analyse, Aufbau, Launch und Support Teil einer gesteuerten Reise werden.',
      'Find the friction': 'Reibung finden',
      'We identify what is costing time, trust, sales, or operational confidence.': 'Wir identifizieren, was Zeit, Vertrauen, Umsatz oder operative Sicherheit kostet.',
      'Prioritise the first win': 'Den ersten Gewinn priorisieren',
      'We separate urgent fixes from nice-to-have ideas so progress starts without creating new risk.':
        'Wir trennen dringende Korrekturen von netten Ideen, damit Fortschritt beginnt, ohne neues Risiko zu schaffen.',
      'Build the connected layer': 'Die verbundene Ebene bauen',
      'We design and configure the website, IT, automation, content, and protection pieces that belong together.':
        'Wir entwerfen und konfigurieren Website, IT, Automatisierung, Inhalte und Schutzbausteine, die zusammengehören.',
      'Document the handover': 'Die Übergabe dokumentieren',
      'We leave the business with cleaner ownership, clearer access, practical notes, and fewer mysteries.':
        'Wir hinterlassen klarere Verantwortung, übersichtlichere Zugänge, praktische Notizen und weniger offene Fragen.',
      'Support the evolution': 'Die Weiterentwicklung unterstützen',
      'We keep the system visible, maintained, and ready for the next improvement.': 'Wir halten das System sichtbar, gepflegt und bereit für die nächste Verbesserung.',
      'Real-world scenarios': 'Praxisnahe Szenarien',
      'Concrete outcomes for businesses that need more than advice.': 'Konkrete Ergebnisse für Unternehmen, die mehr als Beratung brauchen.',
      'Thailand agility, German engineering standards, and UK software perspective working as one delivery model.':
        'Thailändische Agilität, deutsche Engineering-Standards und britische Software-Perspektive als ein gemeinsames Liefermodell.',
      'New bar opening': 'Neue Bar eröffnen',
      'Launch the venue with a digital foundation already in place.': 'Den Standort mit bereits eingerichteter digitaler Grundlage eröffnen.',
      'DEWMIX builds the launch website, menu or booking journey, Google-ready basics, staff email, Wi-Fi/network setup, opening content, and a support handover.':
        'DEWMIX baut Launch-Website, Menü- oder Buchungsstrecke, Google-bereite Grundlagen, Mitarbeiter-E-Mail, Wi-Fi-/Netzwerk-Setup, Eröffnungsinhalte und Support-Übergabe.',
      'Existing business rescue': 'Bestehenden Betrieb retten',
      'Stabilise a messy setup without stopping daily operations.': 'Ein unübersichtliches Setup stabilisieren, ohne den Alltag zu stoppen.',
      'We clean domains, accounts, access, files, backups, outdated pages, supplier confusion, and documentation so the business can move forward safely.':
        'Wir ordnen Domains, Konten, Zugänge, Dateien, Backups, veraltete Seiten, Anbieterchaos und Dokumentation, damit das Unternehmen sicher weiterkommt.',
      'AI automation deployment': 'AI-Automatisierung einführen',
      'Reduce repeated work while keeping people in control.': 'Wiederholte Arbeit reduzieren und Menschen in Kontrolle halten.',
      'We map enquiries, FAQs, follow-ups, internal reminders, lead routing, and human handover so automation improves service instead of creating noise.':
        'Wir strukturieren Anfragen, FAQs, Follow-ups, interne Erinnerungen, Lead-Routing und menschliche Übergabe, damit Automatisierung den Service verbessert statt Lärm zu erzeugen.',
      'Why it works': 'Warum es funktioniert',
      'Premium execution is not about adding more tools. It is about making the whole system feel intentional.':
        'Premium-Umsetzung bedeutet nicht, mehr Tools hinzuzufügen. Es geht darum, dass sich das gesamte System bewusst geplant anfühlt.',
      'DEWMIX Digital is built for owners and teams who want a dependable online presence and a calmer technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.':
        'DEWMIX Digital ist für Inhaber und Teams gebaut, die eine verlässliche Online-Präsenz und eine ruhigere Technologiebasis wollen, ohne viele getrennte Anbieter zu steuern. Wir verbinden markenbewusstes Design, praktische IT, sichere Einrichtung, AI-Automatisierung, Medienproduktion und laufenden Support in einem verantwortlichen Service.',
      'Clear ownership': 'Klare Verantwortung',
      'Secure foundations': 'Sichere Grundlagen',
      'Practical automation': 'Praktische Automatisierung',
      'Long-term support': 'Langfristiger Support',
      'Content that matches the system': 'Inhalte, die zum System passen',
      'Tell DEWMIX what needs to look better, work better, or scale better.': 'Sagen Sie DEWMIX, was besser aussehen, besser funktionieren oder besser skalieren soll.',
      'Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused first step without asking for private credentials through this form.':
        'Teilen Sie den Teil des Betriebs, der schwach, unübersichtlich, veraltet oder riskant wirkt. DEWMIX kann einen fokussierten ersten Schritt definieren, ohne über dieses Formular private Zugangsdaten abzufragen.',
      'Website / online presence': 'Website / Online-Präsenz',
      'IT setup / network': 'IT-Setup / Netzwerk',
      'AI / automation': 'AI / Automatisierung',
      'Security / backup / monitoring': 'Sicherheit / Backup / Monitoring',
      'Media / content': 'Medien / Inhalte',
      Name: 'Name',
      Email: 'E-Mail',
      Organisation: 'Organisation',
      'Project focus': 'Projektfokus',
      'Select a focus': 'Fokus auswählen',
      'Not sure yet': 'Noch nicht sicher',
      'What needs fixing?': 'Was muss verbessert werden?',
      'Send consultation request': 'Beratungsanfrage senden',
      'Do not send passwords or private credentials through this form.': 'Bitte senden Sie keine Passwörter oder privaten Zugangsdaten über dieses Formular.',
      'Thank you. Connect this form to a secure endpoint to receive consultation requests.':
        'Vielen Dank. Verbinden Sie dieses Formular mit einem sicheren Endpoint, um Beratungsanfragen zu empfangen.',
      'DEWMIX Digital. All rights reserved.': 'DEWMIX Digital. Alle Rechte vorbehalten.',
    },
    attributes: {
      'DEWMIX Digital home': 'Startseite von DEWMIX Digital',
      'Primary navigation': 'Hauptnavigation',
      'Language selector': 'Sprachauswahl',
      'Switch language to English': 'Sprache auf Englisch umstellen',
      'Switch language to Thai': 'Sprache auf Thai umstellen',
      'Switch language to German': 'Sprache auf Deutsch umstellen',
      'DEWMIX delivery strengths': 'Lieferstärken von DEWMIX',
      'Primary actions': 'Hauptaktionen',
      'DEWMIX delivery stack': 'DEWMIX Liefer-Stack',
      'DEWMIX connected operations visual': 'Visualisierung verbundener Abläufe von DEWMIX',
      'DEWMIX server room with secured infrastructure and operations monitoring':
        'DEWMIX Serverraum mit gesicherter Infrastruktur und Betriebsüberwachung',
      'System status examples': 'Beispiele für Systemstatus',
      'DEWMIX operating focus': 'Operativer Fokus von DEWMIX',
      'Before and after transformation examples': 'Vorher-Nachher-Beispiele der Transformation',
      'Connected ecosystem layers': 'Verbundene Ökosystem-Ebenen',
      'DEWMIX collaboration across Thailand, Germany, and the United Kingdom':
        'DEWMIX Zusammenarbeit über Thailand, Deutschland und das Vereinigte Königreich hinweg',
      'DEWMIX collaboration wall showing Thailand, Germany, and United Kingdom flags':
        'DEWMIX Kollaborationswand mit Flaggen von Thailand, Deutschland und dem Vereinigten Königreich',
      'Footer navigation': 'Footer-Navigation',
    },
  },
};

const languageSwitcher = document.querySelector('[data-language-switcher]');
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const translatableTextNodes = [];
const translatableAttributes = [];
const descriptionMeta = document.querySelector('meta[name="description"]');
const ATTRIBUTE_NAMES = ['aria-label', 'alt', 'placeholder', 'title'];

function normaliseText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function getLanguage(language) {
  return translations[language] ? language : DEFAULT_LANGUAGE;
}

function shouldSkipTextNode(node) {
  const parent = node.parentElement;
  return !parent || parent.closest('script, style, [data-no-translate]');
}

function captureTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipTextNode(node) || !normaliseText(node.textContent ?? '')) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const original = normaliseText(node.textContent ?? '');

    translatableTextNodes.push({ node, original });

    if (node.parentElement && !node.parentElement.dataset.i18n) {
      node.parentElement.dataset.i18n = original;
    }
  }
}

function captureAttributes() {
  document.querySelectorAll('*').forEach((element) => {
    ATTRIBUTE_NAMES.forEach((attributeName) => {
      const original = element.getAttribute(attributeName);

      if (original) {
        translatableAttributes.push({ element, attributeName, original });
      }
    });
  });
}

function translateText(original, language) {
  return translations[language]?.text[original] ?? translations[DEFAULT_LANGUAGE].text[original] ?? original;
}

function translateAttribute(original, language) {
  return translations[language]?.attributes[original] ?? translations[DEFAULT_LANGUAGE].attributes[original] ?? original;
}

function applyLanguage(language) {
  const safeLanguage = getLanguage(language);
  const activeTranslations = translations[safeLanguage];

  document.documentElement.lang = activeTranslations.lang;
  document.title = activeTranslations.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', activeTranslations.description);
  }

  translatableTextNodes.forEach(({ node, original }) => {
    const translated = translateText(original, safeLanguage);
    const leadingWhitespace = node.textContent?.match(/^\s*/)?.[0] ?? '';
    const trailingWhitespace = node.textContent?.match(/\s*$/)?.[0] ?? '';
    node.textContent = `${leadingWhitespace}${translated}${trailingWhitespace}`;
  });

  translatableAttributes.forEach(({ element, attributeName, original }) => {
    element.setAttribute(attributeName, translateAttribute(original, safeLanguage));
  });

  languageButtons.forEach((button) => {
    const isSelected = button.dataset.lang === safeLanguage;
    button.classList.toggle('is-active', isSelected);
    button.setAttribute('aria-pressed', isSelected.toString());
  });

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, safeLanguage);
  } catch {
    // Ignore storage failures so the static site still works in restricted browsers.
  }
}

function getStoredLanguage() {
  try {
    return getLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE);
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

captureTextNodes();
captureAttributes();
applyLanguage(getStoredLanguage());

languageSwitcher?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-lang]');

  if (!button) {
    return;
  }

  applyLanguage(button.dataset.lang || DEFAULT_LANGUAGE);
});

const consultationForm = document.querySelector('[data-quote-form]');
const formNotice = document.querySelector('[data-form-notice]');

consultationForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formNotice) {
    const storedLanguage = getStoredLanguage();
    formNotice.textContent = translateText(
      'Thank you. Connect this form to a secure endpoint to receive consultation requests.',
      storedLanguage,
    );
  }
});

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear().toString();
}
