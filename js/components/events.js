import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";

function Events() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  const allEvents = [
    {
      name: "BREAK THE BARRIERS",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991514/Club%20twenty%20Website/Events/BREAK_THE_BARRIERS_xkxrpz.webp",
      category: "MARATHON",
      desc: `"Break the Barriers Marathon - A Stride for Earth" was a transformative marathon event that unfolded on April 22, 2018, in celebration of World Earth Day at Lovely Professional University (LPU). With over 300 passionate participants, this event brought together individuals from diverse backgrounds to run not just for personal achievement, but for a collective cause - breaking barriers to create a sustainable and eco-friendly world. The scenic route at LPU provided a picturesque backdrop for the runners, emphasizing the connection between physical wellness and environmental consciousness. As participants crossed the finish line, the event left a lasting impact, inspiring a commitment to environmental responsibility and fostering a sense of community united by a shared vision for a greener, healthier planet. Break the Barriers Marathon at LPU was more than a race; it was a powerful statement and a significant step towards a sustainable future.`,
      year: "April 22, 2018",
      participants: "300+",
    },
    {
      name: "NIRVANA 2.0",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991518/Club%20twenty%20Website/Events/NIRVANA_hledo9.webp",
      category: "SPORTS & EDM",
      desc: `"Nirvana, held from August 16th to 21st, 2018, emerged as a dynamic fusion of sports and e-sports, captivating a massive audience at the event. In collaboration with Dragcon, this multi-day extravaganza showcased a diverse array of activities, from traditional sports like chess, cricket, and racing to contemporary e-sports including PUBG, Counter-Strike, and Call of Duty. The event witnessed a surge in mass participation, fostering a vibrant sense of community. Adding to the excitement were thrilling competitions such as a body-building championship, bike stunts, and various other engaging games. An EDM night heightened the festive atmosphere, providing students with an unforgettable entertainment experience. With an estimated budget of 2 lakhs rupees, Nirvana not only celebrated sportsmanship but also embraced the evolving realm of e-sports, leaving participants with cherished memories of a week-long celebration."`,
      year: "16TH - 21ST AUG 2018",
      participants: "1800+",
    },
    {
      name: "GUINNESS BOOK WORLD RECORD FOR DRUG AWARNESS",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991516/Club%20twenty%20Website/Events/DRUG_AWARNESS_scrvfn.webp",
      category: "AWARNESS SESSION",
      desc: ` On August 31st, 2018, a monumental event unfolded as 2,219 individuals came together to achieve the Guinness World Record for the largest drug awareness session. Taking place in commemoration of International Overdose Awareness Day, this extraordinary attempt sought to raise awareness about the critical issue of drug abuse. The massive turnout reflected a collective commitment to address and combat the challenges posed by substance abuse. Participants engaged in a comprehensive drug awareness session, contributing to a groundbreaking initiative that surpassed previous records. By choosing this significant date, the event not only aimed to set a world record but also to honor those affected by overdose and to promote a broader understanding of the importance of drug awareness. This record-breaking gathering stands as a testament to the power of collective action in fostering awareness and combating the global issue of drug abuse.`,
      year: "31ST AUG, 2018",
      participants: "2400",
    },
    {
      name: "SWACHHTHON",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991521/Club%20twenty%20Website/Events/SWACHHTHON_fb7v9m.webp",
      category: "CYCLOTHON AND MARATHON",
      desc: ` On October 2nd, 2018, a transformative Cyclothon and Walkathon unfolded at Guru Gobind Stadium in Jalandhar, aligning with the vision of a clean and healthy India. In collaboration with HDFC Bank and the Jalandhar administration, the event drew attention to the significance of cleaner and healthier surroundings. Participants enthusiastically pedaled and walked in unison, symbolizing a collective commitment to environmental well-being. The association with HDFC Bank and local administration underscored the collaborative effort towards a common goal. Adding a musical touch to the event, there was a guest performance by the renowned artist Master Saleem, enhancing the festive and motivational atmosphere. This initiative not only promoted physical fitness but also served as a powerful reminder of the importance of environmental stewardship, fostering a sense of community engagement and responsibility for a cleaner and healthier future.`,
      year: "2ND OCT, 2018",
      participants: "2500+",
    },
    {
      name: "SWACHHATA MoHUA APP INTERNSHIP",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991520/Club%20twenty%20Website/Events/SWACHHAT_lbz69f.webp",
      category: "SOCIAL",
      desc: ` From October 16th to November 15th, 2018, an impactful internship unfolded focused on the Swachhata MoHUA app, a groundbreaking initiative by the government. The internship was designed to contribute to the successful management and enhancement of the app, emphasizing cleanliness and urban sanitation. Interns actively engaged in a disciplined and relaxing environment, working collaboratively to meet the objectives set by the government. This unique opportunity allowed participants to contribute directly to a government-backed project, gaining valuable experience in app development, management, and civic engagement. The Swachhata MoHUA app internship not only provided a platform for skill development but also played a crucial role in promoting the government's vision for a cleaner and healthier urban landscape. Participants emerged from the internship with a sense of accomplishment, having contributed to a national initiative aimed at fostering cleanliness and hygiene.`,
      year: "16TH OCT - 15TH NOV, 2018",
      participants: "300",
    },
    {
      name: "AFRICA CHAMPIONS LEAGUE",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991513/Club%20twenty%20Website/Events/AFRICAN_FOOTBALL_CHAMPIONSHIP_cjigpq.webp",
      category: "FOOTBALL TOURNAMENT",
      desc: ` The Africa Champions League, held from September 8th, 2018, onwards, stood as a month-long celebration of African football excellence. This prestigious championship, meticulously managed with discipline and comfort, brought together the continent's top football teams in a thrilling competition. The tournament not only showcased the incredible talent of African footballers but also demonstrated the successful collaboration between organizers and PAN AFRICA SCO, contributing to the seamless execution of the event. As the matches unfolded, fans witnessed a display of skill, sportsmanship, and the rich diversity of football culture across the continent. The Africa Champions League not only crowned a football champion but also served as a unifying force, fostering a sense of pride and camaraderie among nations and fans across Africa. The event, with its strategic management and collaborative spirit, left a lasting impact on the African football landscape.`,
      year: "8TH SEPT, 2018",
      participants: "150",
    },
    {
      name: "YOUTH SPEAK FORUM",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991522/Club%20twenty%20Website/Events/YOUTH_SPEAK_FORUM_mbqwnw.webp",
      category: "EDUCATIONAL",
      desc: ` On September 11th, 2018, the dynamic "Youth Speak Forum" provided a global platform for the exchange of ideas, powered by the renowned Association Internationale des Étudiants en Sciences Économiques et Commerciales (AIESEC). With the belief that anyone can have a transformative idea, the forum facilitated the cross-pollination of diverse thoughts and perspectives. Youth from various backgrounds engaged in meaningful interactions, led by accomplished personalities who shared their insights and achievements. The event transcended geographical boundaries, simultaneously taking place across the globe, underlining its truly international scope. Supported by Club Twenty, the Youth Speak Forum not only encouraged dialogue but also inspired action, empowering young minds to contribute to positive change. This collaborative forum, driven by AIESEC, served as a catalyst for innovation and empowered the youth to make their voices heard on a global stage.`,
      year: "11TH SEPT, 2018",
      participants: "800",
    },
    {
      name: "GUINNESS BOOK WORLD RECORD FOR BHANGRA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991516/Club%20twenty%20Website/Events/GUINNESS_BOOK_WORLD_RECORD_FOR_BHANGRA_sit1ze.webp",
      category: "WORLD RECORD",
      desc: ` On November 1st, 2018, a momentous event unfolded at Lovely Professional University (LPU) as it successfully attempted to secure the Guinness World Record for the largest Bhangra performance. The event, managed in collaboration with Club Twenty, showcased the vibrant and energetic spirit of Punjabi culture. With meticulous planning and execution, Club Twenty members played an integral role in the management team, ensuring the smooth conduct of the record-breaking attempt. The lively atmosphere resonated with the beats of Bhangra as participants, embodying the rich cultural heritage, came together in a synchronized dance, creating a spectacle that went beyond regional boundaries. This achievement not only celebrated the exuberance of Bhangra but also highlighted the coordination and teamwork exhibited by the organizers, making it a memorable and successful event in LPU's history.`,
      year: "1ST NOV, 2018",
      participants: "4500",
    },
    {
      name: "INDIAN SCIENCE CONGRESS (ICS)",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/ISC_cyr0ik.webp",
      category: "EDUCATIONAL/CULTURAL",
      desc: ` The Indian Science Congress (ISC), held from January 3rd to 7th, 2019, was a momentous gathering that brought together the brightest minds in science and research. Inaugurated by the honorable Prime Minister, Shri Narendra Modi, the event was a testament to India's commitment to scientific advancement. The meticulous preparations, initiated by dedicated Club Twenty members from December 3rd, 2018, ensured the seamless execution of the congress. With a remarkable turnout of 15,000+ delegates, the event provided a platform for over 300 scientists to showcase their groundbreaking projects, attracting attention and fostering collaboration. The presence of Nobel Laureates added prestige and global perspective to the congress. Club Twenty members played a vital role in the management team, particularly in organizing the cultural exhibition and stalls, contributing significantly to the success of this internationally acclaimed scientific gathering.`,
      year: "3RD - 7TH JAN, 2019",
      participants: "12000+",
    },
    {
      name: "SHAURYA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991520/Club%20twenty%20Website/Events/SHAURYA_vnitlc.webp",
      category: "SOCAIL",
      desc: ` On January 26th, 2019, the initiative "Shaurya" illuminated the spirit of Republic Day with a heartwarming visit to a slum area in Jalandhar. Driven by the belief that bringing smiles to children's faces brings immense satisfaction, participants dedicated quality time to engage with the residents of the underprivileged community. The event transcended traditional celebrations, focusing on the essence of compassion and community service. Participants shared meaningful moments with the less fortunate, fostering a sense of connection and unity. "Shaurya" exemplified the true spirit of Republic Day by channeling the energy and enthusiasm towards making a positive impact on the lives of those in need. The time spent together in the slum area not only brought joy to the residents but also left a lasting impression, reminding everyone involved of the significance of empathy and service on such special occasions.`,
      year: "26TH JAN, 2019",
      participants: "80",
    },
    {
      name: "RACE FOR GRACE",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991519/Club%20twenty%20Website/Events/RACE_FOR_GRACE_hcqdxe.webp",
      category: "SOCAIL/MARATHON",
      desc: `"Race for Grace" on February 3rd, 2019, marked a significant milestone in the realm of student-organized events, hosting a 5 km marathon with a profound cause—cancer awareness. This impactful event witnessed an unprecedented participation of over 1600 individuals, making it the largest gathering organized by any student organization. In collaboration with esteemed partners such as Can Protect Foundation, Inner Wheel, and Zumba Fitness, the marathon not only promoted physical fitness but also raised awareness about cancer prevention and treatment. The event transcended traditional marathon goals, emphasizing a collective dedication to a noble cause. "Race for Grace" exemplified the potential of student-driven initiatives to make a meaningful impact, fostering a sense of community, health awareness, and social responsibility in the fight against cancer.`,
      year: "3RD FEB, 2019",
      participants: "1600+",
    },
    {
      name: "IECON",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991516/Club%20twenty%20Website/Events/IECON_glf7ex.webp",
      category: "ENTREPRENEURSHIP",
      desc: ` On February 23rd, 2019, the Indian Entrepreneurship Congress (IECON-2019) emerged as a pivotal platform for innovation and business acumen. Organized in collaboration with LPU Start-Up School, the event celebrated Indian entrepreneurship, drawing attention to the dynamic and evolving landscape of startups. The highlight of the event was the 'One in a Million' contest, where participants competed for prizes worth an impressive 2 million dollars. IECON-2019 attracted a notable audience, including angel investors and accomplished entrepreneurs, creating a conducive environment for networking and mentorship. The successful management of the event was evident in handling a crowd of over 2000 students, showcasing the enthusiasm and interest in fostering entrepreneurship. This congress not only provided a stage for emerging talents but also underscored the collaborative spirit essential for the growth and success of the entrepreneurial ecosystem in India.`,
      year: "23RD FEB, 2019",
      participants: "700+",
    },
    {
      name: "FITNESS TALK",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991521/Club%20twenty%20Website/Events/THE_FITNESS_TALK_dcm0xo.webp",
      category: "TALK SHOW",
      desc: `"The Fitness Talk" on March 5th, 2019, marked a significant initiative towards promoting physical and mental well-being among the youth. The event featured interactive sessions with distinguished speakers, including Mr. Rajpal Singh, former Indian Hockey team captain, and Mr. Siddarth Choudhary, an ex-sea captain. The discussions delved into the importance of maintaining and enhancing both physical and mental health. This engaging platform provided valuable insights and practical tips for the audience, inspiring them to prioritize fitness in their lives. The presence of accomplished speakers underscored the significance of a healthy lifestyle, emphasizing the positive impact on overall well-being. "The Fitness Talk" emerged as an excellent step in driving awareness about fitness, fostering a culture of health-consciousness among the youth and encouraging them to embrace a holistic approach to wellness.`,
      year: "5TH MAR, 2019",
      participants: "250",
    },
    {
      name: "JANG-E-AZADI VISIT",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/JANG_E_AZADI_VIST_shs4sw.webp",
      category: "TRIP",
      desc: ` The Jang-e-Azadi Memorial Visit held on March 13, 2019, in Jalandhar, Punjab, was a profound educational trip that brought together over 300 participants. The event aimed to commemorate and explore the historical significance of the Jang-e-Azadi Memorial, providing participants with a unique opportunity to delve into India's rich history. Nestled in the heart of Punjab, the memorial served as a poignant reminder of the sacrifices made during the struggle for independence.`,
      year: "13TH MAR, 2019",
      participants: "300+",
    },
    {
      name: "DAILY WORLD MARATHON",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991514/Club%20twenty%20Website/Events/DAILY_WORLD_MARATHON_y5rizj.webp",
      category: "MARATHON",
      desc: ` On March 31, 2019, the 3rd edition of the Daily World Marathon unfolded with a powerful theme: "Energising Youth and Tandrust Punjab." The marathon, centered around the motto "If it doesn't challenge you, it won't change you," aimed to inspire participants to push their limits and embrace positive transformation. Renowned cricketer Mr. Harbhajan Singh graced the event as the Sports Ambassador, adding prestige to the occasion.
With 20 lakhs worth of prizes at stake, the marathon drew participants from all walks of life, fostering a spirit of healthy competition and physical fitness. Notably, the Club Twenty members played a crucial role in the event's management team, ensuring seamless execution. The marathon not only celebrated athleticism but also promoted the ideals of youth empowerment and a healthier, vibrant Punjab. It stood as a testament to the transformative power of challenges and the collective strength of a community committed to well-being and resilience.`,
      year: "31ST MAR, 2019",
      participants: "4000+",
    },
    {
      name: "FINAL YEAR PHOTOGRAPHY",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991515/Club%20twenty%20Website/Events/FINAL_YEAR_PHOTOGRAPHY_2019_tzhkyr.webp",
      category: "PHOTOGRAPHY",
      desc: ` The Final Year Photography event, held from April 2nd to 5th, 2019, at Lovely Professional University, Punjab, was a spectacular culmination for over 5000 graduating students. A celebration of their academic journey, the event was a unique blend of nostalgia and creativity, capturing the essence of their time at the university. As the students prepared to embark on new adventures, the photography event served as a poignant reflection of their shared experiences.
The highlight was the capturing of the last group photo, symbolizing the unity and bond of the entire graduating batch. It was an emotional and amazing experience for both the participants and the photographers involved, marking the end of an academic chapter and the beginning of a new and exciting phase in the lives of these students.`,
      year: "2ND - 5TH APR, 2019",
      participants: "5000+",
    },
    {
      name: "PRESS CONFRENCE WITH KALANK STAR CAST",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/KALANK_STAR_CAST_ddifbu.webp",
      category: "PRESS CONFRENCE",
      desc: ` On April 12, 2019, the School of Journalism at Lovely Professional University hosted an exclusive press conference featuring the star cast of 'Kalank,' Varun Dhawan and Alia Bhatt. Attended by 18 enthusiastic participants, including students from Club20, the event unfolded on the vibrant campus in Punjab. The press conference provided a rare opportunity for budding journalists to engage with and interview the dynamic actors. Varun Dhawan and Alia Bhatt shared insights into their roles, experiences during the film's production, and the broader cinematic landscape. The event not only enriched the journalistic skills of the participants but also fostered a direct connection between the students and Bollywood's leading stars, enhancing the educational experience at Lovely Professional University.`,
      year: "12TH APR, 2019",
      participants: "18",
    },
    {
      name: "CENTURY OF JALIYANWALA BAGH",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/JALLIANWALA_BAGH_nefsfc.webp",
      category: "SOCAIL/CLULTURAL",
      desc: ` On April 13, 2019, a poignant event, the 'Century of Jallianwala Bagh' march, unfolded at Lovely Professional University, Punjab, drawing together 800 participants for a significant cultural and social commemoration. Marking the centenary of the tragic Jallianwala Bagh massacre, the event took on a somber tone as the crowd, led by an impassioned leader, marched in remembrance. The march served as a collective reflection on the historical significance of the tragedy and its enduring impact on the Indian nation. By joining and leading the crowd, the organizer facilitated a powerful expression of solidarity and remembrance, fostering a cultural connection that transcended time and resonated with the values of unity and remembrance.`,
      year: "13TH APR, 2019",
      participants: "800",
    },
    {
      name: "SADHBHAVANA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991519/Club%20twenty%20Website/Events/SADHBHAVANA_vdmydk.webp",
      category: "SOCIAL",
      desc: `"Sadbhavana," was a heartwarming event that brought together over 400+  workers in a celebration of camaraderie and well-being. The day was filled with sports and fun games, fostering a sense of unity and enjoyment. Notably, club members actively participated in the games, uplifting and encouraging the workers. The event extended beyond recreation, offering free dental check-ups to prioritize the workers' health. To add to the festivities, snacks and beverages were generously provided, creating a warm and inclusive atmosphere. "Sadbhavana" stood as a testament to the spirit of unity and care, emphasizing the importance of fostering positive connections within the community.`,
      year: "1ST MAY, 2019",
      participants: "400+",
    },
    {
      name: "KTM STUNT SHOW",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991518/Club%20twenty%20Website/Events/KTM_STUNT_SHOW_qfd6v2.webp",
      category: "KTM STUNT SHOW",
      desc: ` The adrenaline-pumping "KTM Stunt Show" roared into action on July 13, 2019, at Lovely Professional University, Punjab, captivating an audience of 2000+. Skillfully organized by Club Twenty, the event showcased the prowess of bikers as they executed daring stunts, defying gravity and pushing the limits of two-wheel mastery. The venue buzzed with excitement as the skilled participants demonstrated a thrilling blend of precision and daring maneuvers. The "KTM Stunt Show" not only celebrated the artistry of bike stunts but also brought together enthusiasts and spectators for a day of high-energy entertainment, cementing itself as a highlight in the pulse-raising world of extreme sports.`,
      year: "13TH JULY, 2019",
      participants: "2000+",
    },
    {
      name: "FRESHMAN INDUCTION",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991515/Club%20twenty%20Website/Events/FRESHMEN_INDUCTION_2019_qgulgp.webp",
      category: "CULTURAL",
      desc: ``,
      year: "16TH JULY - 4TH AUG, 2019",
      participants: "10000+",
    },
    {
      name: "AIRBEAT FIESTA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991513/Club%20twenty%20Website/Events/AIRBEAT_FIESTA_puk8fd.webp",
      category: "FRSHER'S PARTY",
      desc: `"Airbeat Fiesta," held on August 5, 2019, at Lovely Professional University, Punjab, was a vibrant celebration welcoming the 2019 batch of freshers. Organized by CLUB20, the event aimed to ensure a warm reception for newcomers, providing an unforgettable night of joy and camaraderie. With over 1500 participants, the fiesta unfolded at the Girls Hostel from 6:30 pm to 11 pm, creating a mesmerizing atmosphere with disco lighting, upbeat music, a fashion show, dancing, singing, and exhilarating games. The event not only eased any potential homesickness but also fostered a sense of community as both coordinators and freshers actively participated, making Airbeat Fiesta a night to remember for all.`,
      year: "5TH AUG, 2019",
      participants: "1500+",
    },
    {
      name: "3BL",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991513/Club%20twenty%20Website/Events/3BL_fh8u9r.webp",
      category: "3X3 BASKETBALL LEAGUE",
      desc: ` On August 13th and 14th, 2019, CLUB TWENTY elevated the sports scene with a unique 3X3 Basketball League, defying the norm with its distinctive format. With the event unfolding at 5 pm, over 100 participants embraced the chance to compete on the official 3BL set, a platform typically reserved for Indian Olympic team selections. The league added a dynamic twist to traditional basketball, fostering a competitive spirit and pushing participants to showcase their skills in a thrilling environment. CLUB TWENTY's commitment to organizing unconventional sports events shone through, providing both players and spectators with an exhilarating experience that went beyond the ordinary and celebrated the diverse and dynamic nature of sports.`,
      year: "13TH -14TH AUG, 2019",
      participants: "70+",
    },
    {
      name: "VANDE MATARAM",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991522/Club%20twenty%20Website/Events/VANDE_MATRAM_h8zjj2.webp",
      category: "SOCIAL",
      desc: `"Vande Mataram," held on August 15, 2019, in Phagwara, transcended the conventional Independence Day celebration. With over 100 participants, the event focused on spreading joy and knowledge among the children in a nearby slum area. A heartfelt initiative, the day involved distributing eatables and stationery, fostering a sense of camaraderie through play, dance, and song. Volunteers also shared insights about the nation's independence, creating a meaningful connection with the young minds. Witnessing the happiness on the faces of the children was truly heartwarming, emphasizing the spirit of unity and compassion. "Vande Mataram" exemplified the power of collective efforts to make a positive impact on the lives of the underprivileged, turning Independence Day into a celebration of shared joy and learning.`,
      year: "15TH AUG, 2019",
      participants: "100+",
    },
    {
      name: "SPORTS UTSAV",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991520/Club%20twenty%20Website/Events/SPORTS_UTSAV_iycrbq.webp",
      category: "SPORTS",
      desc: `"Sports Utsav," spanning from August 25th to September 17th, 2019, emerged as a spectacular mega competition at Lovely Professional University, Punjab, encompassing the fervor of seven diverse sports. With a participation count of 900, the event became a haven for sports enthusiasts, offering a comprehensive array of both indoor and outdoor competitions. The lineup featured intellectually stimulating games like chess, fast-paced contests in Table Tennis and Badminton, the strategic thrill of 6A Cricket, the dynamic energy of Futsal, the team spirit in Volleyball, and the speed and agility of various races.
"Sports Utsav" wasn't just a competition; it was a celebration of athleticism, teamwork, and passion for sports. Participants engaged in a month-long extravaganza that catered to diverse interests, fostering a sense of sportsmanship and unity among the participants. The event successfully transformed the campus into a hub of sporting excellence, leaving a lasting impact on the university's sporting culture.`,
      year: "25TH AUG - 17TH SEP, 2019",
      participants: "900",
    },
    {
      name: "GLOWRUN ELECTRICA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/GLOWRUN_xdznvz.webp",
      category: "NIGHT MARATHON",
      desc: ` On November 8, 2019, Lovely Professional University witnessed an unprecedented spectacle with the inaugural GlowRun Electrica, a national event organized by CLUB TWENTY. Drawing over 1300 participants from both within and outside the university, this night marathon became a beacon of uniqueness and social impact. Illuminated by neon bands and t-shirts, runners traversed a mesmerizing, music-filled track, making it the first-ever 21Km glow run in India.
Beyond the electrifying ambiance, the event carried a meaningful purpose, supporting campaigns like Fit India Movement, DAPO Movement, and Cauvery Calling. CLUB20's contribution of 50,000 trees to Cauvery Calling showcased a commitment to environmental welfare and farmer support. The presence of a High Court judge added a distinguished touch to the event, emphasizing its significance. With SUNBURN EDM amplifying joy and enthusiasm, Glow Run Electrica marked a milestone in LPU's event history, blending fitness, music, and social responsibility in a truly groundbreaking way.`,
      year: "8TH NOV, 2019",
      participants: "1200+",
    },
    {
      name: "SUNBURN",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991521/Club%20twenty%20Website/Events/SUNBURN_tc2aun.webp",
      category: "EDM NIGHT",
      desc: ` On November 8, 2019, the pulsating beats of SUNBURN EDM echoed through Lovely Professional University, Punjab, transforming the campus into a euphoric EDM night. With over 1800 participants immersed in the rhythm, every hand soared into the air, creating an electrifying atmosphere of joy and enthusiasm. The event transcended the ordinary, offering an unforgettable experience for EDM enthusiasts and partygoers alike.
SUNBURN EDM at Lovely Professional University marked not just a music event, but a celebration of unity and collective energy. The vibrant lights, thumping beats, and the sheer exuberance of the crowd blended seamlessly, creating a sensory spectacle that left an indelible mark on the university's social and cultural landscape. It was a night where music became a unifying force, fostering a sense of community and shared euphoria among the diverse participants.`,
      year: "8TH NOV, 2019",
      participants: "1800+",
    },
    {
      name: "NESOJ",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991518/Club%20twenty%20Website/Events/NESOJ_obcwdn.webp",
      category: "SPORTS MEET",
      desc: ` Club Twenty, in collaboration with the North East Sports Organization Jalandhar, successfully orchestrated the closing ceremony of the 7th NESOJ Games & Sports Meet 2019 on November 12, 2019, at Hardaspur Ground, Lovely Professional University, Punjab. The event, graced by esteemed guests including Smt. Soso Shaiza from the National Commission for Women, Dr. Sorabh Lakhanpal, and Mr. Subhashish Mazumdar, witnessed heightened enthusiasm and energy. With 270+ participants, the NESOJ showcased a remarkable display of sportsmanship across various categories during the October 10 to November 12 duration. This sports meet not only fostered healthy competition but also celebrated the spirit of unity and athleticism within the vibrant LPU community.`,
      year: "10TH OCT - 12TH NOV, 2019",
      participants: "270+",
    },
    {
      name: "IIC TRAINING",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/IIC_TRANING_se12ja.webp",
      category: "EDUCATIONAL",
      desc: ` In a significant initiative to cultivate entrepreneurial spirit, Lovely Professional University (LPU) joined forces with the Government of India to host the IIC Training event. From January 16 to 18, 2020, over 300 participants converged at LPU, Punjab, for a transformative experience. More than 25 mentors from the Ministry of Human Resource Development's Innovation Cell conducted a series of four training programs covering Design Thinking, IPR & Technology Transfer, Pre-incubation, and more. These programs equipped participants to become "IIC-Innovation Ambassadors," enhancing their mentorship capacity. The collaborative effort aims to empower these ambassadors to champion innovation and entrepreneurship, fostering a culture of creativity and business acumen within their respective institutions.`,
      year: "16TH - 18TH JAN, 2020",
      participants: "300+",
    },
    {
      name: "SHAURYA 2.0",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991519/Club%20twenty%20Website/Events/SHAURYA_2.O_xuhcih.webp",
      category: "SOCIAL",
      desc: ` Club Twenty, driven by a commitment to social impact, organized a heartwarming Republic Day event that touched the lives of a slum community near Lovely Professional University. Members engaged with children, imparted knowledge about rights to parents, and inspired housewives to explore entrepreneurship. The exchange of learning was profound, emphasizing the joy in every moment. Another remarkable event, "Shaurya," celebrated the hidden talents within the LPU family through a digital extravaganza on January 26, 2020, in Phagwara. With over 80 participants showcasing skills in dancing, singing, fine arts, cooking, vlog making, and more, Shaurya emerged as a vibrant platform fostering camaraderie and talent discovery within the LPU community.`,
      year: "26TH JAN, 2020",
      participants: "80+",
    },
    {
      name: "RACE FOR GRACE 2.O",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991519/Club%20twenty%20Website/Events/RACE_FOR_GRACE_2.O_j03ypw.webp",
      category: "MARATHON/SOCAIL",
      desc: ` Club Twenty's commitment to philanthropy shone brightly in "Race for Grace 2.0," a impactful 'run-for-cause' marathon held on February 9, 2020, at Lovely Professional University, Punjab. With a resounding participation of over 600 individuals, the event aimed to raise funds for cancer patients, directing a significant portion to the Can Protect Foundation—an NGO dedicated to supporting those affected by cancer. This marathon exemplified Club Twenty's ongoing dedication to noble causes, leveraging community engagement and physical activity to make a meaningful impact. With the success of "Race for Grace 2.0," Club Twenty affirmed its intent to continue spearheading more such benevolent events in the future.`,
      year: "9TH FEB, 2020",
      participants: "600+",
    },
    {
      name: "CAMPUS PRINCESS",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991513/Club%20twenty%20Website/Events/CAMPUS_PRINCESS_axsugv.webp",
      category: "FASHION SHOW",
      desc: ` In collaboration with Atan Dharyati, the Student Organization Cell at Lovely Professional University supported the successful organization of "Fbb Campus Princess 2020 – Road to Miss India 2020." Judged by the distinguished Miss Universal Peace and Humanity 2014, Ruhi Singh, the event provided a golden opportunity for Campus Princess participants to explore and experiment in Indian pageantry. The evening, hosted at LPU, witnessed the active involvement of Club Twenty members in the management team, adding a special touch to the affair. With over 200 participants, this fashion show not only showcased beauty and style but also created a memorable platform for aspiring beauty queens to shine on their journey to Miss India 2020.`,
      year: "14TH MARCH, 2020",
      participants: "200+",
    },
    {
      name: "KHEL-E-TALASH",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991518/Club%20twenty%20Website/Events/KHEL-E-TALASH_eoxeuv.webp",
      category: "BLOG WRITING COMPETITION",
      desc: ` Khel-e-talash," an engaging blog writing competition, unfolded as a vibrant exploration of literary talent at Lovely Professional University. Held online from April 2nd to 15th, 2020, the event aimed to discover adept writers within the university community while also promoting LPU's official blogging platform, Happening@LPU. Participants, numbering over 100, were offered the choice of two genres: Sports and Travel. A winner emerged from each category, earning the distinction of having their work published on Happenings@LPU. Notably, outstanding and original content creators were presented with a unique opportunity to join CLUB20 as a content writer and become part of the Happenings@LPU team directly, fostering a culture of creativity and collaboration.`,
      year: "2ND - 15TH APR, 2020",
      participants: "100+",
    },
    {
      name: "CREATIVE 20",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991514/Club%20twenty%20Website/Events/CREATIVE_20_wgxmiy.webp",
      category: "RECRETATIONAL",
      desc: ` "Experience the magic of creativity at 'Creative 20,' a week-long extravaganza held from 14th to 20th April 2020 at Lovely Professional University, Punjab. With over 200 enthusiastic participants, this recreational event was a digital showcase of diverse talents within the LPU community. From mesmerizing dance performances to soulful singing, captivating fine arts displays, delectable cooking demonstrations, and engaging vlog creations, Creative 20 featured 20 exciting activities that brought out the hidden talents of the participants. This mega-pack of creativity not only entertained but also served as a platform to unearth undiscovered skills, making it an unforgettable and enriching experience for all involved."`,
      year: "14TH - 20TH APR, 2020",
      participants: "200+",
    },
    {
      name: "FIT VUDO INDIA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991515/Club%20twenty%20Website/Events/FIT_VUTO_INDIA_kwnb0q.webp",
      category: "FITNESS CHALLENGES",
      desc: ` "Embark on a journey to fitness excellence with 'Fit Vudo India,' a dynamic event held on 27th April 2020 at Lovely Professional University, Punjab. Drawing over 100 enthusiastic participants, this fitness challenge was a thrilling showcase of strength and endurance. Participants engaged in various exercises, including push-ups, skipping rope, and a myriad of other challenges that tested their physical prowess. Set against the vibrant backdrop of LPU, Fit Vudo India aimed to promote a healthy lifestyle and inspire individuals to push their fitness boundaries. With an electric atmosphere and fierce competition, this event not only celebrated physical fitness but also fostered a sense of camaraderie among participants, making it a memorable and invigorating experience for all."`,
      year: "27TH APRIL, 2020",
      participants: "100+",
    },
    {
      name: "FRESHMAN INDUCTION",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991516/Club%20twenty%20Website/Events/FRESHMEN_INDUCTION_yuc7ge.webp",
      category: "FUN/CULTURAL",
      desc: ` "Embarking on a thrilling journey, Freshman Induction, held from 15th July to 1st August 2020 at Lovely Professional University, Punjab, welcomed over 13,000 bright minds to the campus. This spectacular event aimed at introducing freshers to university policies, guiding them to the best food courts, and unraveling the myriad of fun experiences awaiting them. Beyond the practicalities, the induction fostered a sense of community by acquainting students with the Department of Student Welfare norms and encouraging them to explore and enhance their talents. More than just an orientation, it was a cultural and fun-filled initiation into university life, creating lasting memories and forging connections that would accompany these newcomers throughout their academic journey."`,
      year: "15TH JULY - 1ST AUG, 2020",
      participants: "13000+",
    },
    {
      name: "DAUDEGA INDIA",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991515/Club%20twenty%20Website/Events/DAUDEGA_INDIA_riatyc.webp",
      category: "VIRTUAL MARATHON",
      desc: ` "Daudega India, a unique celebration of World Environment Day, brought families together for 'A Run with Family' on 15th August 2020 at Lovely Professional University, Punjab. This virtual marathon, with over 160 participants, encouraged a healthy lifestyle and family bonding. Offering free registration, the event featured four categories—1Km, 2Km, 5Km, and 10Km—where participants, accompanied by their family members, covered the chosen distance. E-certificates added a digital touch to the accomplishment. Held in the spirit of unity and well-being, Daudega India exemplified the power of collective action and a shared commitment to a healthier environment, making it a memorable and impactful event for families within the LPU community." `,
      year: "15th aug 2020",
      participants: "160+",
    },
    {
      name: "THE MILLENNIAL SHOW",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991522/Club%20twenty%20Website/Events/THE_MILLENNIAL_SHOW_otkb46.webp",
      category: "LIVE SHOW",
      desc: ` "The Millennial Show, held on 4th November 2020 at Lovely Professional University, Punjab, unfolded as a captivating live show that brought together over 700 participants. The spotlight was on Mr. Rahul Bhatnagar, an accomplished entrepreneur, TEDx speaker, and sales mentor, engaging in a thought-provoking dialogue with the students. This virtual interaction provided a unique opportunity for students to delve into the world of entrepreneurship, drawing insights from Mr. Bhatnagar's rich experience. The event seamlessly blended technology and wisdom, fostering a dynamic platform for learning and inspiration. The Millennial Show not only showcased the power of digital connectivity but also left an indelible mark on the minds of the LPU community, making it an enriching and insightful experience."`,
      year: "4th november 2020",
      participants: "700+",
    },
    {
      name: "SPORTS UTSAV 2.O",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991520/Club%20twenty%20Website/Events/SPORTS_UTSAV_2.O_nsdjus.webp",
      category: "SPORTS",
      desc: ` "Sports Utsav 2.0, a grand sporting spectacle held on 29th August at Lovely Professional University, Punjab, witnessed the convergence of over 220 enthusiastic participants. This mega competition showcased a diverse array of sports, both indoor and outdoor, catering to the sporting spirit of vertos. The event featured exhilarating competitions in chess, table tennis, badminton, 6A cricket, futsal, volleyball, and races (including 100m, 200m, 400m, 800m, and relay). A haven for sports enthusiasts, Sports Utsav 2.0 provided a platform for participants to showcase their skills and passion across multiple disciplines. The vibrant atmosphere, intense competition, and camaraderie made this event a true celebration of athleticism, embodying the spirit of sportsmanship at LPU."`,
      year: "September 10, 2022",
      participants: "220+",
    },
    {
      name: "SWARAG",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991522/Club%20twenty%20Website/Events/SWARG_b7xnyp.webp",
      category: "LIVE CONCERT",
      desc: ` "Swarag, an unforgettable live music concert, took center stage on October 18, 2022, at Lovely Professional University, Punjab, drawing an audience of over 1000 music enthusiasts. The pulsating beats and soulful melodies were delivered by the renowned band Swarag, creating an electrifying atmosphere. Club Twenty, a dynamic part of the management team, played a pivotal role in orchestrating the event. Organized by the student organization Oasis in collaboration with Coding Ninja and Coding Pirates, Swarag transcended musical boundaries, captivating the hearts of all attendees. This harmonious blend of music and collaboration showcased the vibrant spirit of unity and talent within the LPU community, making Swarag a truly mesmerizing and collaborative celebration."`,
      year: "Tuesday, October 18, 2022",
      participants: "1000+",
    },
    {
      name: "RACE FOR GRACE 3.O",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991519/Club%20twenty%20Website/Events/RACE_FOR_GRACE_3.O_gr3phk.webp",
      category: "MARATHON",
      desc: ` "Race for Grace 3.0, a noble 'run-for-cause' marathon, unfolded on February 19, 2023, at Lovely Professional University, Punjab, rallying together a passionate community of over 350 participants. Orchestrated by Club Twenty, known for championing charitable causes, this event aimed to raise funds for cancer patients. The 2Km and 5Km race not only promoted fitness but also compassionately supported the cause. The majority of the funds generated were dedicated to the Can Protect Foundation, an NGO devoted to aiding cancer patients. Club Twenty, with its philanthropic ethos, continues its commitment to impactful events, vowing to contribute to more noble causes in the future. Race for Grace 3.0 exemplified the power of community and collective action for a meaningful and impactful purpose."`,
      year: "Sunday, February 19, 2023",
      participants: "350+",
    },
    {
      name: "ONE WORLD",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991519/Club%20twenty%20Website/Events/ONE_WORLD_lksvr5.webp",
      category: "CULTURAL",
      desc: ` "One World, the annual cultural extravaganza held on 6th April 2023 at Lovely Professional University, Punjab, transcended borders as over 5000 participants immersed themselves in a global celebration. Each school embraced a unique country, presenting a kaleidoscope of cultures. Beyond traditional performances, the event featured an intriguing food stall exhibition curated by the Club Twenty team. Culinary delights from around the world delighted participants, adding a flavorful dimension to the cultural showcase. One World not only fostered cross-cultural understanding but also showcased the richness of diversity within the LPU community. This dynamic blend of cultural representations and gastronomic experiences made One World a vibrant celebration of global unity and harmony."`,
      year: "6TH APRIL, 2023",
      participants: "5000+",
    },
    {
      name: "FINAL YEAR PHOTOGRAPHY 2023",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991514/Club%20twenty%20Website/Events/FINAL_YEAR_PHOTOGRAPHY_2023_is0gzf.webp",
      category: "PHOTOGRAPHY",
      desc: `"Final Year Photography 2023 at Lovely Professional University, Punjab, was a grand celebration that brought together more than 8000 graduating students from diverse disciplines. From April 20th to 25th, the event beautifully encapsulated the essence of their academic journey through a lens. As the students prepared to bid farewell to their alma mater, the photography event became a poignant reflection of shared experiences, creating a visual narrative of their time at LPU. The highlight was the collective capture of the last group photo, a symbolic representation of unity and camaraderie within the graduating batch. This emotional and breathtaking experience marked the end of an academic chapter and the commencement of exciting new adventures for each participant."`,
      year: "20TH - 25TH APRIL. 2023",
      participants: "8000+",
    },
    {
      name: "1ST INTERNATIONATIONAL SCHOOL T20 TOURNAMENT",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991523/Club%20twenty%20Website/Events/T20-TOURNAMENT_llx0fr.webp",
      category: "CRICKET TOURNAMENT",
      desc: `"The inaugural 1st International School T20 Tournament, held at Lovely Professional University, Punjab, from April 26th to 30th, 2023, marked a significant milestone in school-level cricket. Organized in collaboration with Club Twenty, the event witnessed spirited participation from over 8 school teams hailing from different states across India. This cricket extravaganza not only showcased the talent and passion of budding cricketers but also provided a platform for cultural exchange and friendly competition. The tournament's success was a testament to the commitment of both organizers and participants, fostering a sense of unity and sportsmanship within the school cricket community. The 1st International School T20 Tournament at LPU set the stage for future editions, promising an exciting legacy for school-level cricket in the years to come."`,
      year: "26TH-30TH APRIL, 2023",
      participants: "200+",
    },
    {
      name: "NASA EVENT",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991518/Club%20twenty%20Website/Events/NASA_EVENT_acystp.webp",
      category: "WORKSHOP/CULTURAL",
      desc: ` "The NASA Event, the 65th edition of the National Association of Students of Architecture, India, unfolded from June 7th to 15th, 2023, at Lovely Professional University, Punjab. This monumental gathering brought together a staggering 4500 architecture students from across India for a dynamic blend of workshops, seminars, and cultural events. Club Twenty played a pivotal role, managing transportation logistics for all participants and actively contributing to the cultural festivities. The event not only provided a platform for knowledge exchange and skill enhancement but also fostered a sense of unity within the architecture community. The NASA Event at LPU, with its vibrant blend of academia and culture, stood as a testament to the collaborative spirit and educational enrichment at the heart of the architectural discipline."`,
      year: "7TH JUNE TO 15TH JUNE 2023",
      participants: "4500+",
    },
    {
      name: "FRESHMEN INDUCTION 2023",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991516/Club%20twenty%20Website/Events/FRESHMENT_INDUCATION_2023_dtbyon.webp",
      category: "RECREATIONAL",
      desc: `"Freshmen Induction 2023, held from August 5th to 23rd at Lovely Professional University, Punjab, was a spectacular initiation into university life for over 15,000 newcomers. Beyond the conventional orientation, this event was a holistic experience designed to acquaint freshers with university policies, highlight the best food courts, and unravel a myriad of fun-filled opportunities awaiting them. More than a mere introduction, the induction fostered a strong sense of community, emphasizing Department of Student Welfare norms and encouraging talent exploration. This cultural and recreational extravaganza went beyond the academic realm, creating lasting memories and forging connections that would accompany the students throughout their entire academic journey, making it a memorable and enriching start to their university life."`,
      year: "5TH AUGUST -23RD AUG 2023",
      participants: "15000+",
    },
    {
      name: "SPORTS UTSAV 3.O",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991520/Club%20twenty%20Website/Events/SPORTS_UTSAV_3.O_vpk4me.webp",
      category: "SPORTS",
      desc: ` "Sports Utsav 3.0, spanning from September 1st to 15th, 2023, at Lovely Professional University, Punjab, marked a grand celebration of athleticism, bringing together over 800 participants. This mega sporting competition, featuring a dynamic array of both indoor and outdoor sports, resonated with the spirited sporting culture of vertos. From chess and table tennis to 6A cricket, futsal, volleyball, and a variety of races, the event showcased the diverse skills and passions of participants. The vibrant atmosphere, fueled by intense competition and a spirit of camaraderie, transformed Sports Utsav 3.0 into a true spectacle of sportsmanship. As a haven for sports enthusiasts, it provided a dynamic platform for showcasing talents and celebrating the spirit of athleticism at LPU."`,
      year: "1ST SEP - 15TH SEP 2023",
      participants: "800+",
    },
    {
      name: "DESIGN DAZZLE",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991515/Club%20twenty%20Website/Events/DESIGN_DAZZLE_pvzgbt.webp",
      category: "FRESHER'S PARTY",
      desc: `"Design Dazzle, the dazzling fresher's party hosted on September 12th, 2023, at Lovely Professional University, Punjab, was a vibrant celebration exclusively for the students of the School of Design II. Orchestrated by the Club Twenty team in collaboration with the School of Design II, the event welcomed over 250 participants specializing in Interior and Furniture Design, as well as Product Design. Bursting with excitement, the evening featured a delightful mix of games, scrumptious food, dance, music, and boundless fun. Design Dazzle not only set the stage for creative interactions but also fostered a sense of community and camaraderie among the budding designers, making it a memorable kick-off to their academic journey at LPU."`,
      year: "12TH-09-2023",
      participants: "250+",
    },
    {
      name: "WOJ EDUCATION ORIENTATION",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991522/Club%20twenty%20Website/Events/WOJ-EDUCATION-ORIENTATION_1_c9d89m.webp",
      category: "EDUCATIONsAL",
      desc: `"WOJ Education Orientation, held at Lovely Professional University on November 30th and December 1st, 2023, was a resounding success with a participation of over 240 students. The event showcased a remarkable fusion of educational excellence and innovation. With a focus on preparing students for the dynamic tech landscape, the orientation provided a unique platform for up-to-date peer-to-peer learning, real-world Silicon Valley projects, and industry readiness. The overwhelming response from the student community reflected their enthusiasm and appreciation for the event. WOJ Education Orientation not only highlighted the commitment to academic excellence at LPU but also underscored the importance of staying abreast of evolving educational landscapes for future success."`,
      year: "30TH NOV-1ST DEC 2023",
      participants: "240+",
    },
  ];

  return (
    <div className="relative">
      <div className="join-sticker py-auto">
        <a href="/contact" className="sticky">
          Join Us
        </a>
      </div>
      <section className="text-gray-600 body-font" id="events">
        <div className="container md:!px-5 px-0 py-24 mx-auto">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                className="text-3xl md:text-4xl font-semibold md:font-bold text-[#046EC1] title-font mb-2"
                data-aos="fade-in"
              >
                Club Twenty Events
              </h1>
              <div className="h-1 w-20 bg-[#02C7A4] rounded"></div>
              <div className="flex items-center justify-center p-2">
                <img
                  data-aos="fade-up"
                  width="400"
                  height="200"
                  src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705847173/Club%20twenty%20Website/WEBSITE%20IMAGES/EVENTS_tey2hv.webp"
                  alt="events"
                ></img>
              </div>
            </div>
            <p
              className="lg:w-1/2 w-full leading-relaxed lg:leading-8 text-gray-500 lg:text-lg my-auto"
              data-aos="fade-in"
            >
              Discover a rich tapestry of experiences as you delve into the
              extensive portfolio of Club Twenty's past events. Over the last
              six years, our proactive members have meticulously organized more
              than 100 events, showcasing our commitment to fostering leadership
              skills and holistic growth among students. From the exhilarating
              Race for Grace and dynamic Sports Utsavs to the electrifying
              GlowRun Electrica, insightful Fitness Talks, and engaging events
              like The Millennial Show, Club Twenty has consistently offered a
              diverse range of experiences that resonate with our vibrant
              community. Explore the tapestry of our past events and witness the
              energy that defines Club Twenty's impactful journey.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <section className="text-gray-600 body-font">
              <div className="container px-0 md:!px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {allEvents.map((data) => (
                    <div className="p-1 px-2 md:w-1/3 ">
                      <Link to="/event-details" state={{ data }} className="">
                        <div data-aos="fade-up" className="p-2 clb-evnt-card">
                          <img
                            className="lg:h-60 md:h-40 w-full object-cover object-center rounded-md"
                            src={data.image}
                            alt="event"
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              {data.category}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {data.name}
                            </h1>
                            {/* <p className="leading-relaxed mb-3">{data.desc}</p> */}
                            {/* <div className="flex items-center flex-wrap ">
                              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                {data.year}
                              </span>
                              <span className="text-gray-400 inline-flex items-center text-sm leading-4">
                                {data.participants} <br />
                                Participants
                              </span>
                            </div> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
