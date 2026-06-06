const LANGUAGE_STORAGE_KEY = 'dewmix-language';
const DEFAULT_LANGUAGE = 'en';

const translations = {
  th: {
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
        'DEWMIX Digital ช่วยธุรกิจแทนที่ผู้ให้บริการหลายเจ้า เทคโนโลยีที่ไม่น่าเชื่อถือ ภาพลักษณ์ออนไลน์ที่อ่อนแอ และงานแอดมินด้วยระบบดิจิทัลที่ปลอดภัยและดูเป็นมืออาชีพ',
      'Germany-backed delivery standards': 'มาตรฐานการส่งมอบจากเยอรมนี',
      'Websites, IT, AI, media, and support under one roof': 'เว็บไซต์ IT, AI, สื่อ และซัพพอร์ตในที่เดียว',
      'Built for businesses that need things to work, not just look good':
        'สร้างเพื่อธุรกิจที่ต้องการระบบที่ใช้งานได้จริง ไม่ใช่แค่ดูดี',
      'Explore services': 'ดูบริการ',
      'Operational partner': 'พาร์ตเนอร์ดูแลระบบ',
      Presence: 'การปรากฏตัวออนไลน์',
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
      'Backups planned': 'วางแผนสำรองข้อมูลแล้ว',
      'Alerts visible': 'เห็นการแจ้งเตือนชัดเจน',
      'Web presence': 'ตัวตนบนเว็บ',
      'Business IT': 'IT ธุรกิจ',
      'AI workflows': 'เวิร์กโฟลว์ AI',
      'Secure operations': 'การดำเนินงานปลอดภัย',
      'Media production': 'ผลิตสื่อ',
      'Problems we fix': 'ปัญหาที่เราแก้',
      'Real business problems need more than another supplier handoff.':
        'ปัญหาธุรกิจจริงต้องการมากกว่าการส่งต่อระหว่างผู้ให้บริการ',
      'DEWMIX connects the public website, internal systems, automation, protection, and ongoing support so each part of the operation has clear ownership.':
        'DEWMIX เชื่อมเว็บไซต์สาธารณะ ระบบภายใน ระบบอัตโนมัติ การป้องกัน และซัพพอร์ตต่อเนื่อง เพื่อให้ทุกส่วนมีผู้รับผิดชอบชัดเจน',
      Problem: 'ปัญหา',
      Solution: 'แนวทางแก้ไข',
      'Your website looks unfinished or outdated.': 'เว็บไซต์ของคุณดูไม่เสร็จหรือเก่าเกินไป',
      'We rebuild the public face of the business with clear messaging, fast pages, clean design, mobile-ready layouts, and proper launch setup.':
        'เราสร้างภาพลักษณ์ออนไลน์ใหม่ด้วยข้อความชัดเจน หน้าเว็บเร็ว ดีไซน์สะอาด รองรับมือถือ และตั้งค่าการเปิดตัวอย่างถูกต้อง',
      'Your IT is held together by guesswork.': 'ระบบ IT ของคุณพึ่งพาการคาดเดามากเกินไป',
      'We organise devices, email, access, domains, networks, backups, and documentation so the business knows what it owns and how it works.':
        'เราจัดระเบียบอุปกรณ์ อีเมล การเข้าถึง โดเมน เครือข่าย การสำรองข้อมูล และเอกสาร เพื่อให้ธุรกิจรู้ว่ามีอะไรและทำงานอย่างไร',
      'Staff and customers keep repeating the same questions.': 'พนักงานและลูกค้าถามคำถามเดิมซ้ำ ๆ',
      'We build practical AI assistants and automation flows for customer service, lead handling, internal admin, reminders, and follow-up.':
        'เราสร้างผู้ช่วย AI และโฟลว์อัตโนมัติที่ใช้งานได้จริงสำหรับบริการลูกค้า จัดการลีด งานแอดมินภายใน การเตือน และการติดตามผล',
      'Nobody knows if the network is healthy.': 'ไม่มีใครรู้ว่าเครือข่ายยังทำงานดีหรือไม่',
      'We set up monitoring, alerts, maintenance routines, and simple dashboards so issues are visible before they become expensive.':
        'เราตั้งค่าการมอนิเตอร์ การแจ้งเตือน งานบำรุงรักษา และแดชบอร์ดง่าย ๆ เพื่อเห็นปัญหาก่อนกลายเป็นค่าใช้จ่ายใหญ่',
      'You need content but do not want five different suppliers.': 'คุณต้องการคอนเทนต์ แต่ไม่อยากจัดการซัพพลายเออร์หลายเจ้า',
      'We create promotional graphics, flyers, animations, video, audio, music, and social assets that match the digital system around them.':
        'เราสร้างกราฟิกโปรโมชัน ใบปลิว แอนิเมชัน วิดีโอ เสียง เพลง และสื่อโซเชียลที่เข้ากับระบบดิจิทัลโดยรวม',
      'Every supplier blames another supplier.': 'ผู้ให้บริการแต่ละเจ้าต่างโทษกันไปมา',
      'DEWMIX becomes one accountable technical partner across website, IT, AI, media, and support.':
        'DEWMIX เป็นพาร์ตเนอร์เทคนิคหนึ่งเดียวที่รับผิดชอบเว็บไซต์ IT, AI, สื่อ และซัพพอร์ต',
      'Complete digital operations, not disconnected services.': 'การดำเนินงานดิจิทัลครบวงจร ไม่ใช่บริการที่แยกขาดจากกัน',
      BUILD: 'สร้าง',
      'Business IT & Infrastructure': 'IT ธุรกิจและโครงสร้างพื้นฐาน',
      'Set up the technical foundation a business needs to work cleanly: hardware, devices, email, domains, networks, access, backups, and recovery planning.':
        'ตั้งฐานเทคนิคที่ธุรกิจต้องใช้ให้ทำงานอย่างเป็นระบบ: ฮาร์ดแวร์ อุปกรณ์ อีเมล โดเมน เครือข่าย การเข้าถึง การสำรอง และแผนกู้คืน',
      'Hardware setup': 'ตั้งค่าฮาร์ดแวร์',
      'Office/device configuration': 'ตั้งค่าออฟฟิศและอุปกรณ์',
      'Email and domain setup': 'ตั้งค่าอีเมลและโดเมน',
      'Network setup and management': 'ตั้งค่าและดูแลเครือข่าย',
      'Secure access planning': 'วางแผนการเข้าถึงที่ปลอดภัย',
      'Backup and recovery planning': 'วางแผนสำรองและกู้คืน',
      LAUNCH: 'เปิดตัว',
      'Websites & Apps': 'เว็บไซต์และแอป',
      'Create the public and internal tools that make the business easier to trust, contact, book, quote, manage, and improve.':
        'สร้างเครื่องมือภายนอกและภายในที่ช่วยให้ธุรกิจน่าเชื่อถือ ติดต่อ จอง ขอใบเสนอราคา จัดการ และปรับปรุงได้ง่ายขึ้น',
      'Business websites': 'เว็บไซต์ธุรกิจ',
      'Landing pages': 'แลนดิ้งเพจ',
      'Website optimisation': 'ปรับปรุงเว็บไซต์',
      'CMS-ready builds': 'งานสร้างที่พร้อมใช้ CMS',
      'App development': 'พัฒนาแอป',
      'Booking, quote, and admin systems': 'ระบบจอง ใบเสนอราคา และแอดมิน',
      SECURE: 'ป้องกัน',
      'Security, Monitoring & Control': 'ความปลอดภัย มอนิเตอร์ และการควบคุม',
      'Make risks visible and manageable with hardening, backup discipline, access cleanup, monitoring, dashboards, and custom control panels.':
        'ทำให้ความเสี่ยงมองเห็นและจัดการได้ ด้วยการเสริมความปลอดภัย วินัยการสำรองข้อมูล จัดสิทธิ์เข้าถึง มอนิเตอร์ แดชบอร์ด และแผงควบคุมเฉพาะ',
      'Security hardening': 'เสริมความปลอดภัย',
      'Data protection': 'ปกป้องข้อมูล',
      'Network monitoring': 'มอนิเตอร์เครือข่าย',
      'Admin dashboards': 'แดชบอร์ดแอดมิน',
      'Custom control panels': 'แผงควบคุมเฉพาะ',
      'Access and permission cleanup': 'จัดระเบียบสิทธิ์และการเข้าถึง',
      AUTOMATE: 'อัตโนมัติ',
      'AI & Automation': 'AI และระบบอัตโนมัติ',
      'Reduce repetitive work with controlled AI builders, customer-service assistants, lead routing, follow-up flows, and internal admin workflows.':
        'ลดงานซ้ำด้วย AI ที่ควบคุมได้ ผู้ช่วยบริการลูกค้า การส่งต่อลีด โฟลว์ติดตามผล และเวิร์กโฟลว์แอดมินภายใน',
      'Custom AI builders': 'สร้าง AI เฉพาะทาง',
      'Customer service assistants': 'ผู้ช่วยบริการลูกค้า',
      'Inbound and outbound communication flows': 'โฟลว์สื่อสารเข้าและออก',
      'Lead routing': 'จัดเส้นทางลีด',
      'Staff/admin workflows': 'เวิร์กโฟลว์พนักงานและแอดมิน',
      'Repetitive task reduction': 'ลดงานซ้ำ',
      CREATE: 'สร้างสรรค์',
      'Creative & Media': 'ครีเอทีฟและสื่อ',
      'Produce the content layer that supports the website and social channels: graphics, flyers, animations, video, music, sound, and promotional assets.':
        'ผลิตชั้นคอนเทนต์ที่สนับสนุนเว็บไซต์และช่องทางโซเชียล: กราฟิก ใบปลิว แอนิเมชัน วิดีโอ เพลง เสียง และสื่อโปรโมชัน',
      'Social media setup': 'ตั้งค่าโซเชียลมีเดีย',
      'Promotional infographics': 'อินโฟกราฟิกโปรโมชัน',
      Flyers: 'ใบปลิว',
      'Digital animations': 'แอนิเมชันดิจิทัล',
      'Video production': 'ผลิตวิดีโอ',
      'Custom music and sound': 'เพลงและเสียงเฉพาะ',
      'The DEWMIX Stack': 'สแต็กของ DEWMIX',
      'A business does not need random digital pieces. It needs connected layers that support each other.':
        'ธุรกิจไม่ต้องการชิ้นส่วนดิจิทัลแบบสุ่ม แต่ต้องการเลเยอร์ที่เชื่อมกันและสนับสนุนกัน',
      'Brand & Content': 'แบรนด์และคอนเทนต์',
      'Messaging, visuals, social assets, flyers, video, sound, and promotional material.':
        'ข้อความ ภาพ สื่อโซเชียล ใบปลิว วิดีโอ เสียง และสื่อโปรโมชัน',
      'Website & App': 'เว็บไซต์และแอป',
      'Fast public pages, booking flows, quote systems, admin tools, and app interfaces.':
        'หน้าเว็บสาธารณะที่เร็ว โฟลว์จอง ระบบใบเสนอราคา เครื่องมือแอดมิน และอินเทอร์เฟซแอป',
      'Customer-service assistants, lead handling, reminders, internal admin, and follow-up.':
        'ผู้ช่วยบริการลูกค้า การจัดการลีด การเตือน งานแอดมินภายใน และการติดตามผล',
      'Network & Devices': 'เครือข่ายและอุปกรณ์',
      'Hardware, email, domains, office setup, secure access, and network management.':
        'ฮาร์ดแวร์ อีเมล โดเมน การตั้งค่าออฟฟิศ การเข้าถึงปลอดภัย และการจัดการเครือข่าย',
      'Security, Backup & Monitoring': 'ความปลอดภัย สำรองข้อมูล และมอนิเตอร์',
      'Hardening, data protection, alerts, maintenance routines, dashboards, and support.':
        'เสริมความปลอดภัย ปกป้องข้อมูล แจ้งเตือน งานบำรุงรักษา แดชบอร์ด และซัพพอร์ต',
      'How DEWMIX works': 'วิธีทำงานของ DEWMIX',
      'Simple enough to move fast. Structured enough to avoid surprises.':
        'เรียบง่ายพอให้เดินเร็ว มีโครงสร้างพอให้หลีกเลี่ยงเรื่องไม่คาดคิด',
      Audit: 'ตรวจสอบ',
      'We review the current website, IT setup, risks, tools, accounts, content, and business priorities.':
        'เราตรวจเว็บไซต์ปัจจุบัน การตั้งค่า IT ความเสี่ยง เครื่องมือ บัญชี คอนเทนต์ และลำดับความสำคัญของธุรกิจ',
      Map: 'วางแผน',
      'We turn the mess into a clear delivery map: what matters first, what can wait, and what should never be touched without a backup.':
        'เราเปลี่ยนความยุ่งเหยิงเป็นแผนส่งมอบที่ชัดเจน: อะไรสำคัญก่อน อะไรรอได้ และอะไรไม่ควรแตะโดยไม่มีแบ็กอัป',
      Build: 'สร้าง',
      'We design, configure, secure, automate, document, and test the selected parts of the digital operation.':
        'เราออกแบบ ตั้งค่า ป้องกัน ทำอัตโนมัติ ทำเอกสาร และทดสอบส่วนที่เลือกของการดำเนินงานดิจิทัล',
      Launch: 'เปิดใช้งาน',
      'We deploy cleanly, check the basics, prepare handover notes, and make sure the business can actually use the system.':
        'เรา deploy อย่างเรียบร้อย ตรวจพื้นฐาน เตรียมบันทึกส่งมอบ และทำให้มั่นใจว่าธุรกิจใช้งานระบบได้จริง',
      'We monitor, maintain, improve, and help the business avoid sliding back into chaos.':
        'เรามอนิเตอร์ บำรุงรักษา ปรับปรุง และช่วยให้ธุรกิจไม่กลับไปสู่ความวุ่นวายเดิม',
      'Example engagements': 'ตัวอย่างงานที่ทำ',
      'Useful delivery packages for real businesses and private clients.': 'แพ็กเกจส่งมอบที่ใช้งานได้จริงสำหรับธุรกิจและลูกค้าส่วนบุคคล',
      'Hospitality launch': 'เปิดตัวธุรกิจบริการ',
      'Guest-facing website and operational setup': 'เว็บไซต์สำหรับลูกค้าและการตั้งค่าการดำเนินงาน',
      'Guest-facing website, booking journey, email setup, local search basics, social media foundations, and handover.':
        'เว็บไซต์สำหรับลูกค้า เส้นทางการจอง ตั้งค่าอีเมล พื้นฐานการค้นหาในพื้นที่ พื้นฐานโซเชียลมีเดีย และส่งมอบ',
      'Growing service business': 'ธุรกิจบริการที่กำลังเติบโต',
      'Website refresh and internal cleanup': 'รีเฟรชเว็บไซต์และจัดระเบียบภายใน',
      'Website refresh, business email, shared drive cleanup, access control, backup planning, and workflow automation.':
        'รีเฟรชเว็บไซต์ อีเมลธุรกิจ จัดระเบียบไดรฟ์แชร์ ควบคุมการเข้าถึง วางแผนแบ็กอัป และทำเวิร์กโฟลว์อัตโนมัติ',
      'Private client / executive setup': 'ลูกค้าส่วนบุคคล / ผู้บริหาร',
      'Secure private digital environment': 'สภาพแวดล้อมดิจิทัลส่วนตัวที่ปลอดภัย',
      'Secure devices, home or private office network, password/access cleanup, backups, monitoring, and trusted support.':
        'อุปกรณ์ปลอดภัย เครือข่ายบ้านหรือสำนักงานส่วนตัว จัดระเบียบรหัสผ่าน/การเข้าถึง แบ็กอัป มอนิเตอร์ และซัพพอร์ตที่ไว้ใจได้',
      'Large company monitoring support': 'ซัพพอร์ตมอนิเตอร์สำหรับบริษัทขนาดใหญ่',
      'Network visibility and escalation paths': 'มองเห็นเครือข่ายและเส้นทาง escalation',
      'Network visibility, alerts, reporting dashboards, support workflow, escalation planning, and ongoing improvement.':
        'การมองเห็นเครือข่าย การแจ้งเตือน แดชบอร์ดรายงาน เวิร์กโฟลว์ซัพพอร์ต แผน escalation และการปรับปรุงต่อเนื่อง',
      'AI customer-service assistant': 'ผู้ช่วย AI สำหรับบริการลูกค้า',
      'Inbound and outbound communication support': 'ซัพพอร์ตการสื่อสารเข้าและออก',
      'Inbound enquiry handling, outbound follow-up, FAQ automation, lead capture, and handover to human staff when needed.':
        'จัดการคำถามขาเข้า ติดตามผลขาออก FAQ อัตโนมัติ เก็บลีด และส่งต่อให้พนักงานเมื่อจำเป็น',
      About: 'เกี่ยวกับ',
      'Germany-backed standards. Hands-on digital execution.': 'มาตรฐานเยอรมนี พร้อมลงมือทำดิจิทัลจริง',
      'DEWMIX Digital is built for businesses that want a stronger online presence and a more dependable technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.':
        'DEWMIX Digital สร้างมาเพื่อธุรกิจที่ต้องการตัวตนออนไลน์ที่แข็งแรงขึ้นและฐานเทคโนโลยีที่พึ่งพาได้ โดยไม่ต้องจัดการผู้ให้บริการจำนวนมาก เรารวมดีไซน์ที่เข้าใจแบรนด์ IT ที่ใช้งานได้จริง การตั้งค่าที่ปลอดภัย AI อัตโนมัติ การผลิตสื่อ และซัพพอร์ตต่อเนื่องไว้ในบริการเดียวที่รับผิดชอบครบ',
      'Clear ownership': 'เจ้าของงานชัดเจน',
      'Secure foundations': 'ฐานที่ปลอดภัย',
      'Practical automation': 'อัตโนมัติที่ใช้งานได้จริง',
      'Long-term support': 'ซัพพอร์ตระยะยาว',
      'Content that matches the system': 'คอนเทนต์ที่เข้ากับระบบ',
      'Tell DEWMIX what needs to look better, work better, or scale better.':
        'บอก DEWMIX ว่าอะไรต้องดูดีขึ้น ทำงานดีขึ้น หรือขยายได้ดีขึ้น',
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
  },
  de: {
    title: 'DEWMIX Digital | Websites, IT-Systeme, KI & sichere digitale Abläufe',
    description:
      'DEWMIX Digital ist ein Full-Service-IT-Partner mit Deutschland-gestützten Standards für Websites, IT-Systeme, Automatisierung, Medien, KI, Support und sichere digitale Abläufe.',
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
        'Websites, IT-Systeme, KI und digitale Inhalte von einem verantwortlichen Team.',
      'DEWMIX Digital helps businesses replace scattered vendors, unreliable tech, weak online presence, and manual admin with a secure, polished digital operation.':
        'DEWMIX Digital hilft Unternehmen, verstreute Dienstleister, unzuverlässige Technik, schwache Online-Präsenz und manuelle Verwaltung durch einen sicheren, professionellen digitalen Betrieb zu ersetzen.',
      'Germany-backed delivery standards': 'Lieferstandards mit deutschem Anspruch',
      'Websites, IT, AI, media, and support under one roof': 'Websites, IT, KI, Medien und Support aus einer Hand',
      'Built for businesses that need things to work, not just look good':
        'Gebaut für Unternehmen, bei denen Systeme funktionieren müssen – nicht nur gut aussehen.',
      'Explore services': 'Leistungen ansehen',
      'Operational partner': 'Betriebspartner',
      Presence: 'Präsenz',
      'Website, brand, content, search basics': 'Website, Marke, Inhalte und Suchgrundlagen',
      Infrastructure: 'Infrastruktur',
      'Devices, email, domains, networks': 'Geräte, E-Mail, Domains und Netzwerke',
      Automation: 'Automatisierung',
      'AI assistants, workflows, admin reduction': 'KI-Assistenten, Workflows und weniger Admin-Aufwand',
      Protection: 'Schutz',
      'Security, backup, access, data hygiene': 'Sicherheit, Backups, Zugriff und Datenhygiene',
      Support: 'Support',
      'Monitoring, maintenance, improvements': 'Monitoring, Wartung und Verbesserungen',
      'Website live': 'Website live',
      'Backups planned': 'Backups geplant',
      'Alerts visible': 'Warnungen sichtbar',
      'Web presence': 'Web-Präsenz',
      'Business IT': 'Business-IT',
      'AI workflows': 'KI-Workflows',
      'Secure operations': 'Sichere Abläufe',
      'Media production': 'Medienproduktion',
      'Problems we fix': 'Probleme, die wir lösen',
      'Real business problems need more than another supplier handoff.':
        'Echte Geschäftsprobleme brauchen mehr als die nächste Übergabe an einen anderen Anbieter.',
      'DEWMIX connects the public website, internal systems, automation, protection, and ongoing support so each part of the operation has clear ownership.':
        'DEWMIX verbindet öffentliche Website, interne Systeme, Automatisierung, Schutz und laufenden Support, damit jeder Teil des Betriebs klare Verantwortung hat.',
      Problem: 'Problem',
      Solution: 'Lösung',
      'Your website looks unfinished or outdated.': 'Ihre Website wirkt unfertig oder veraltet.',
      'We rebuild the public face of the business with clear messaging, fast pages, clean design, mobile-ready layouts, and proper launch setup.':
        'Wir erneuern den öffentlichen Auftritt mit klarer Botschaft, schnellen Seiten, sauberem Design, mobilen Layouts und sauberem Launch-Setup.',
      'Your IT is held together by guesswork.': 'Ihre IT hält nur durch Improvisation zusammen.',
      'We organise devices, email, access, domains, networks, backups, and documentation so the business knows what it owns and how it works.':
        'Wir ordnen Geräte, E-Mail, Zugänge, Domains, Netzwerke, Backups und Dokumentation, damit das Unternehmen weiß, was es besitzt und wie es funktioniert.',
      'Staff and customers keep repeating the same questions.': 'Mitarbeitende und Kunden stellen ständig dieselben Fragen.',
      'We build practical AI assistants and automation flows for customer service, lead handling, internal admin, reminders, and follow-up.':
        'Wir bauen praktische KI-Assistenten und Automatisierungsabläufe für Kundenservice, Lead-Bearbeitung, interne Verwaltung, Erinnerungen und Follow-up.',
      'Nobody knows if the network is healthy.': 'Niemand weiß, ob das Netzwerk gesund ist.',
      'We set up monitoring, alerts, maintenance routines, and simple dashboards so issues are visible before they become expensive.':
        'Wir richten Monitoring, Warnungen, Wartungsroutinen und einfache Dashboards ein, damit Probleme sichtbar werden, bevor sie teuer werden.',
      'You need content but do not want five different suppliers.':
        'Sie brauchen Inhalte, möchten aber nicht fünf verschiedene Lieferanten koordinieren.',
      'We create promotional graphics, flyers, animations, video, audio, music, and social assets that match the digital system around them.':
        'Wir erstellen Werbegrafiken, Flyer, Animationen, Video, Audio, Musik und Social Assets, die zum digitalen System passen.',
      'Every supplier blames another supplier.': 'Jeder Anbieter schiebt die Schuld auf einen anderen.',
      'DEWMIX becomes one accountable technical partner across website, IT, AI, media, and support.':
        'DEWMIX wird ein verantwortlicher Technikpartner für Website, IT, KI, Medien und Support.',
      'Complete digital operations, not disconnected services.': 'Vollständige digitale Abläufe statt unverbundener Einzelleistungen.',
      BUILD: 'AUFBAU',
      'Business IT & Infrastructure': 'Business-IT & Infrastruktur',
      'Set up the technical foundation a business needs to work cleanly: hardware, devices, email, domains, networks, access, backups, and recovery planning.':
        'Wir schaffen die technische Basis, die ein Unternehmen für sauberes Arbeiten braucht: Hardware, Geräte, E-Mail, Domains, Netzwerke, Zugriff, Backups und Wiederherstellungsplanung.',
      'Hardware setup': 'Hardware-Einrichtung',
      'Office/device configuration': 'Office- und Gerätekonfiguration',
      'Email and domain setup': 'E-Mail- und Domain-Setup',
      'Network setup and management': 'Netzwerkaufbau und Verwaltung',
      'Secure access planning': 'Planung sicherer Zugänge',
      'Backup and recovery planning': 'Backup- und Recovery-Planung',
      LAUNCH: 'LAUNCH',
      'Websites & Apps': 'Websites & Apps',
      'Create the public and internal tools that make the business easier to trust, contact, book, quote, manage, and improve.':
        'Wir erstellen öffentliche und interne Tools, die Vertrauen, Kontakt, Buchung, Angebot, Verwaltung und Verbesserung erleichtern.',
      'Business websites': 'Business-Websites',
      'Landing pages': 'Landingpages',
      'Website optimisation': 'Website-Optimierung',
      'CMS-ready builds': 'CMS-fähige Umsetzungen',
      'App development': 'App-Entwicklung',
      'Booking, quote, and admin systems': 'Buchungs-, Angebots- und Admin-Systeme',
      SECURE: 'SICHERN',
      'Security, Monitoring & Control': 'Sicherheit, Monitoring & Kontrolle',
      'Make risks visible and manageable with hardening, backup discipline, access cleanup, monitoring, dashboards, and custom control panels.':
        'Wir machen Risiken sichtbar und beherrschbar – mit Härtung, Backup-Disziplin, bereinigten Zugängen, Monitoring, Dashboards und individuellen Kontrollpanels.',
      'Security hardening': 'Systemhärtung',
      'Data protection': 'Datenschutz',
      'Network monitoring': 'Netzwerk-Monitoring',
      'Admin dashboards': 'Admin-Dashboards',
      'Custom control panels': 'Individuelle Kontrollpanels',
      'Access and permission cleanup': 'Bereinigung von Zugängen und Rechten',
      AUTOMATE: 'AUTOMATISIEREN',
      'AI & Automation': 'KI & Automatisierung',
      'Reduce repetitive work with controlled AI builders, customer-service assistants, lead routing, follow-up flows, and internal admin workflows.':
        'Wir reduzieren Wiederholungsarbeit mit kontrollierten KI-Buildern, Service-Assistenten, Lead-Routing, Follow-up-Abläufen und internen Admin-Workflows.',
      'Custom AI builders': 'Individuelle KI-Builder',
      'Customer service assistants': 'Kundenservice-Assistenten',
      'Inbound and outbound communication flows': 'Inbound- und Outbound-Kommunikation',
      'Lead routing': 'Lead-Routing',
      'Staff/admin workflows': 'Mitarbeiter- und Admin-Workflows',
      'Repetitive task reduction': 'Reduzierung wiederholter Aufgaben',
      CREATE: 'KREATIV',
      'Creative & Media': 'Kreation & Medien',
      'Produce the content layer that supports the website and social channels: graphics, flyers, animations, video, music, sound, and promotional assets.':
        'Wir produzieren die Inhaltsebene für Website und Social Channels: Grafiken, Flyer, Animationen, Video, Musik, Sound und Werbematerial.',
      'Social media setup': 'Social-Media-Setup',
      'Promotional infographics': 'Werbe-Infografiken',
      Flyers: 'Flyer',
      'Digital animations': 'Digitale Animationen',
      'Video production': 'Videoproduktion',
      'Custom music and sound': 'Individuelle Musik und Sounds',
      'The DEWMIX Stack': 'Der DEWMIX Stack',
      'A business does not need random digital pieces. It needs connected layers that support each other.':
        'Ein Unternehmen braucht keine zufälligen digitalen Einzelteile. Es braucht verbundene Ebenen, die sich gegenseitig stützen.',
      'Brand & Content': 'Marke & Inhalte',
      'Messaging, visuals, social assets, flyers, video, sound, and promotional material.':
        'Botschaft, Visuals, Social Assets, Flyer, Video, Sound und Werbematerial.',
      'Website & App': 'Website & App',
      'Fast public pages, booking flows, quote systems, admin tools, and app interfaces.':
        'Schnelle öffentliche Seiten, Buchungsabläufe, Angebotssysteme, Admin-Tools und App-Oberflächen.',
      'Customer-service assistants, lead handling, reminders, internal admin, and follow-up.':
        'Kundenservice-Assistenten, Lead-Bearbeitung, Erinnerungen, interne Verwaltung und Follow-up.',
      'Network & Devices': 'Netzwerk & Geräte',
      'Hardware, email, domains, office setup, secure access, and network management.':
        'Hardware, E-Mail, Domains, Office-Setup, sichere Zugänge und Netzwerkverwaltung.',
      'Security, Backup & Monitoring': 'Sicherheit, Backup & Monitoring',
      'Hardening, data protection, alerts, maintenance routines, dashboards, and support.':
        'Härtung, Datenschutz, Warnungen, Wartungsroutinen, Dashboards und Support.',
      'How DEWMIX works': 'So arbeitet DEWMIX',
      'Simple enough to move fast. Structured enough to avoid surprises.':
        'Einfach genug für Tempo. Strukturiert genug, um Überraschungen zu vermeiden.',
      Audit: 'Audit',
      'We review the current website, IT setup, risks, tools, accounts, content, and business priorities.':
        'Wir prüfen aktuelle Website, IT-Setup, Risiken, Tools, Konten, Inhalte und geschäftliche Prioritäten.',
      Map: 'Plan',
      'We turn the mess into a clear delivery map: what matters first, what can wait, and what should never be touched without a backup.':
        'Wir verwandeln das Chaos in einen klaren Lieferplan: Was zuerst zählt, was warten kann und was nie ohne Backup angefasst werden sollte.',
      Build: 'Umsetzen',
      'We design, configure, secure, automate, document, and test the selected parts of the digital operation.':
        'Wir entwerfen, konfigurieren, sichern, automatisieren, dokumentieren und testen die ausgewählten Teile des digitalen Betriebs.',
      Launch: 'Starten',
      'We deploy cleanly, check the basics, prepare handover notes, and make sure the business can actually use the system.':
        'Wir deployen sauber, prüfen die Grundlagen, bereiten Übergabenotizen vor und stellen sicher, dass das Unternehmen das System wirklich nutzen kann.',
      'We monitor, maintain, improve, and help the business avoid sliding back into chaos.':
        'Wir überwachen, warten, verbessern und helfen dem Unternehmen, nicht wieder ins Chaos zurückzurutschen.',
      'Example engagements': 'Beispielprojekte',
      'Useful delivery packages for real businesses and private clients.':
        'Nützliche Leistungspakete für echte Unternehmen und Privatkunden.',
      'Hospitality launch': 'Hospitality-Launch',
      'Guest-facing website and operational setup': 'Gäste-Website und Betriebssetup',
      'Guest-facing website, booking journey, email setup, local search basics, social media foundations, and handover.':
        'Gäste-Website, Buchungsweg, E-Mail-Setup, lokale Suchgrundlagen, Social-Media-Basis und Übergabe.',
      'Growing service business': 'Wachsendes Dienstleistungsunternehmen',
      'Website refresh and internal cleanup': 'Website-Refresh und interne Bereinigung',
      'Website refresh, business email, shared drive cleanup, access control, backup planning, and workflow automation.':
        'Website-Refresh, Business-E-Mail, Bereinigung gemeinsamer Laufwerke, Zugriffskontrolle, Backup-Planung und Workflow-Automatisierung.',
      'Private client / executive setup': 'Privatkunde / Executive-Setup',
      'Secure private digital environment': 'Sichere private digitale Umgebung',
      'Secure devices, home or private office network, password/access cleanup, backups, monitoring, and trusted support.':
        'Sichere Geräte, Heim- oder Privatbüro-Netzwerk, Passwort-/Zugangsbereinigung, Backups, Monitoring und vertrauenswürdiger Support.',
      'Large company monitoring support': 'Monitoring-Support für große Unternehmen',
      'Network visibility and escalation paths': 'Netzwerktransparenz und Eskalationswege',
      'Network visibility, alerts, reporting dashboards, support workflow, escalation planning, and ongoing improvement.':
        'Netzwerktransparenz, Warnungen, Reporting-Dashboards, Support-Workflow, Eskalationsplanung und laufende Verbesserung.',
      'AI customer-service assistant': 'KI-Kundenservice-Assistent',
      'Inbound and outbound communication support': 'Support für Inbound- und Outbound-Kommunikation',
      'Inbound enquiry handling, outbound follow-up, FAQ automation, lead capture, and handover to human staff when needed.':
        'Bearbeitung eingehender Anfragen, ausgehendes Follow-up, FAQ-Automatisierung, Lead-Erfassung und Übergabe an Mitarbeitende bei Bedarf.',
      About: 'Über uns',
      'Germany-backed standards. Hands-on digital execution.': 'Deutsche Standards. Praktische digitale Umsetzung.',
      'DEWMIX Digital is built for businesses that want a stronger online presence and a more dependable technology base without managing a long list of separate suppliers. We combine brand-aware design, practical IT, secure setup, AI automation, media production, and ongoing support into one accountable service.':
        'DEWMIX Digital ist für Unternehmen gebaut, die eine stärkere Online-Präsenz und eine verlässlichere Technologiebasis wollen, ohne eine lange Liste separater Anbieter zu steuern. Wir verbinden markenbewusstes Design, praktische IT, sichere Einrichtung, KI-Automatisierung, Medienproduktion und laufenden Support in einem verantwortlichen Service.',
      'Clear ownership': 'Klare Verantwortung',
      'Secure foundations': 'Sichere Grundlagen',
      'Practical automation': 'Praktische Automatisierung',
      'Long-term support': 'Langfristiger Support',
      'Content that matches the system': 'Inhalte, die zum System passen',
      'Tell DEWMIX what needs to look better, work better, or scale better.':
        'Sagen Sie DEWMIX, was besser aussehen, besser funktionieren oder besser skalieren soll.',
      'Share the part of the operation that feels weak, messy, outdated, or risky. DEWMIX can help scope a focused first step without asking for private credentials through this form.':
        'Teilen Sie den Teil des Betriebs, der schwach, unübersichtlich, veraltet oder riskant wirkt. DEWMIX kann einen fokussierten ersten Schritt definieren, ohne über dieses Formular private Zugangsdaten abzufragen.',
      'Website / online presence': 'Website / Online-Präsenz',
      'IT setup / network': 'IT-Setup / Netzwerk',
      'AI / automation': 'KI / Automatisierung',
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
      'Do not send passwords or private credentials through this form.':
        'Bitte senden Sie keine Passwörter oder privaten Zugangsdaten über dieses Formular.',
      'Thank you. Connect this form to a secure endpoint to receive consultation requests.':
        'Vielen Dank. Verbinden Sie dieses Formular mit einem sicheren Endpoint, um Beratungsanfragen zu empfangen.',
      'DEWMIX Digital. All rights reserved.': 'DEWMIX Digital. Alle Rechte vorbehalten.',
    },
  },
};

const languageSwitcher = document.querySelector('[data-language-switcher]');
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const translatableTextNodes = [];
const originalDocumentTitle = document.title;
const descriptionMeta = document.querySelector('meta[name="description"]');
const originalDescription = descriptionMeta?.getAttribute('content') ?? '';

function normaliseText(value) {
  return value.replace(/\s+/g, ' ').trim();
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
    translatableTextNodes.push({ node, original: normaliseText(node.textContent ?? '') });
  }
}

function translateText(original, language) {
  if (language === DEFAULT_LANGUAGE) {
    return original;
  }

  return translations[language]?.text[original] ?? original;
}

function applyLanguage(language) {
  const safeLanguage = translations[language] || language === DEFAULT_LANGUAGE ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = safeLanguage;
  document.title = translations[safeLanguage]?.title ?? originalDocumentTitle;

  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', translations[safeLanguage]?.description ?? originalDescription);
  }

  translatableTextNodes.forEach(({ node, original }) => {
    const translated = translateText(original, safeLanguage);
    const leadingWhitespace = node.textContent?.match(/^\s*/)?.[0] ?? '';
    const trailingWhitespace = node.textContent?.match(/\s*$/)?.[0] ?? '';
    node.textContent = `${leadingWhitespace}${translated}${trailingWhitespace}`;
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
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

captureTextNodes();
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
