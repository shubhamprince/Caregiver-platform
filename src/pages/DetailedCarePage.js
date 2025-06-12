import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/DetailedCarePage.css';

const careTypes = [
  {
    title: "In-home Care",
    desc: [
      "In-home care provides a comprehensive solution for individuals who need support but wish to remain in the comfort and familiarity of their own homes. Our caregivers assist with daily activities such as bathing, dressing, meal preparation, and light housekeeping. They also offer companionship, reducing feelings of loneliness and isolation.",
      "In-home care is ideal for seniors, people recovering from surgery, or those managing chronic illnesses. Our team is trained to handle medical equipment, administer medications, and coordinate with healthcare professionals to ensure seamless care.",
      "We tailor our services to each client’s needs, offering flexible schedules ranging from a few hours a day to 24/7 live-in care. Our caregivers are compassionate, reliable, and dedicated to improving the quality of life for those they serve."
    ],
    images: [
      "https://b3383504.smushcdn.com/3383504/wp-content/uploads/2025/02/Health-care-at-home-1024x1024.png?lossy=2&strip=1&webp=1",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Companionship",
    desc: [
      "Companionship is at the heart of our care services. We understand that emotional well-being is just as important as physical health. Our caregivers provide meaningful social interaction, engaging clients in conversations, games, hobbies, and outings.",
      "Regular companionship can significantly reduce feelings of loneliness and depression, especially for seniors living alone. Our caregivers are trained to build genuine connections, offering a listening ear and a friendly presence.",
      "Whether it’s sharing a meal, taking a walk, or simply enjoying a cup of tea together, our companionship services are designed to bring joy and fulfillment to everyday life."
    ],
    images: [
      "https://myhometouch.com/wp-content/uploads/2017/06/Screen-Shot-2017-05-23-at-18.05.10-1140x662.jpg",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Memory Care",
    desc: [
      "Memory care is specialized support for individuals with Alzheimer’s, dementia, or other memory-related conditions. Our caregivers are trained to create a safe, structured environment that reduces confusion and anxiety.",
      "We use proven techniques to stimulate memory, such as reminiscence therapy, music, and cognitive exercises. Our approach is patient-centered, focusing on preserving dignity and independence while ensuring safety.",
      "Family members receive regular updates and guidance on how to support their loved ones. We also provide respite care to give family caregivers a much-needed break."
    ],
    images: [
      "https://www.aplaceformom.com/image/web-lighthouse/prod/is-it-time-for-memory-care?t=default",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Respite Care",
    desc: [
      "Respite care provides temporary relief for family caregivers, allowing them to rest, recharge, or attend to personal matters. Our caregivers step in to ensure continuity of care for your loved one.",
      "Whether you need a few hours, a day, or longer, our respite care services are flexible and reliable. We follow your care plan and routines to minimize disruption for your loved one.",
      "Respite care is essential for preventing caregiver burnout and maintaining a healthy balance for families. Our team is here to support you every step of the way."
    ],
    images: [
      "https://baptistretirement.org/wp-content/uploads/2023/10/What-Is-the-Purpose-of-Respite-Care.jpg",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Personal Care",
    desc: [
      "Personal care is a cornerstone of our services, ensuring that clients maintain their dignity and independence while receiving assistance with daily hygiene, bathing, dressing, and grooming.",
      "Our caregivers are trained to provide respectful, compassionate support, adapting to each individual’s preferences and needs. We understand the importance of privacy and comfort, and we strive to make every interaction positive and empowering.",
      "Personal care services are tailored to each client, whether they require minimal assistance or more comprehensive support. We work closely with families to ensure that all personal care needs are met with the highest standards of quality and compassion."
    ],
    images: [
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Medication Management",
    desc: [
      "Medication management is a critical service for clients who require assistance with organizing and administering their medications. Our caregivers ensure that medications are taken correctly and on time, reducing the risk of errors and complications.",
      "We work closely with healthcare providers and family members to maintain accurate medication records and monitor for any side effects or interactions. Our team is trained to handle a variety of medication formats, including pills, liquids, and injections.",
      "Medication management provides peace of mind for clients and their families, knowing that their health is being monitored and supported by experienced professionals."
    ],
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e极客时间63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Meal Preparation",
    desc: [
      "Meal preparation is an essential service that ensures clients receive nutritious, delicious meals tailored to their dietary needs and preferences. Our caregivers plan menus, shop for groceries, and prepare meals in the comfort of the client’s home.",
      "We accommodate special diets, such as low-sodium, diabetic, or vegetarian, and work closely with clients and families to create meal plans that promote health and enjoyment.",
      "Meal preparation is more than just cooking—it’s about fostering a sense of normalcy and connection. Our caregivers often share meals with clients, providing companionship and encouragement to eat well."
    ],
    images: [
      "https://images.unsplash.com/极客时间photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Transportation Assistance",
    desc: [
      "Transportation assistance enables clients to attend medical appointments, run errands, or participate in social activities. Our caregivers provide safe, reliable transportation, ensuring that clients remain connected to their communities.",
      "We assist with getting in and out of vehicles, carrying packages, and navigating unfamiliar locations. Our drivers are trained to handle mobility challenges and provide support as needed.",
      "Transportation assistance is a lifeline for clients who no longer drive, helping them maintain their independence and quality of life."
    ],
    images: [
      "https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&极客时间fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Housekeeping",
    desc: [
      "Housekeeping services help clients maintain a clean, safe, and comfortable living environment. Our caregivers assist with light cleaning, laundry, organizing, and other household tasks.",
      "A tidy home promotes physical and mental well-being, reducing the risk of falls and infections. Our team respects clients’ privacy and belongings, working efficiently to keep their homes in order.",
      "Housekeeping is often combined with other care services, providing comprehensive support that allows clients to focus on what matters most—their health and happiness."
    ],
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Errand Services",
    desc: [
      "Errand services provide practical support for clients who need help with grocery shopping, picking up prescriptions, mailing packages, or other tasks outside the home.",
      "Our caregivers ensure that errands are completed efficiently and safely, giving clients and their families peace of mind. We communicate regularly to confirm shopping lists and preferences.",
      "Errand services are a valuable part of our holistic approach to care, helping clients maintain their independence and stay connected to their communities."
    ],
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400极客时间&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Social Companionship",
    desc: [
      "Social companionship is a vital service that combats loneliness and isolation. Our caregivers engage clients in meaningful activities, such as playing games, reading, or simply enjoying a conversation.",
      "Regular social interaction can improve mood, cognitive function, and overall well-being. Our caregivers are compassionate listeners and supportive friends, helping clients stay connected and engaged.",
      "Social companionship is often combined with other care services, providing a holistic approach to care that addresses both physical and emotional needs."
    ],
    images: [
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Residential Care",
    desc: [
      "Residential care offers long-term support in a home-like setting for clients who need ongoing assistance. Our caregivers provide round-the-clock care, ensuring safety, comfort, and quality of life.",
      "We create a nurturing environment that feels like home, with personalized care plans that address each client’s unique needs. Our team is trained to handle complex medical conditions and provide emotional support.",
      "Residential care is ideal for clients who require more intensive support than can be provided at home, offering peace of mind for families and a sense of community for clients."
    ],
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Palliative Care",
    desc: [
      "Palliative care is specialized support for clients with serious illnesses, focusing on comfort, dignity, and quality of life. Our caregivers provide compassionate care that addresses physical, emotional, and spiritual needs.",
      "We work closely with healthcare providers and families to manage symptoms, provide pain relief, and offer emotional support. Our goal is极客时间 to help clients live as fully and comfortably as possible.",
      "Palliative care is a holistic approach that honors each client’s wishes and values, providing comfort and support during challenging times."
    ],
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Rehabilitation Care",
    desc: [
      "Rehabilitation care supports clients recovering from surgery, injury, or illness. Our caregivers assist with physical therapy exercises, mobility training, and daily activities to promote recovery and independence.",
      "We work closely with healthcare professionals to implement personalized rehabilitation plans, monitoring progress and adjusting care as needed. Our goal is to help clients regain strength, mobility, and confidence.",
      "Rehabilitation care is a collaborative process that empowers clients to achieve their highest possible level of function and well-being."
    ],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Pet Care Assistance",
    desc: [
      "Pet care assistance helps clients care for their beloved pets, ensuring that their furry friends are fed, walked, and groomed. Our caregivers provide companionship to both clients and their pets, fostering a sense of joy and connection.",
      "We understand the importance of pets in our clients’ lives and strive to make pet care as easy and enjoyable as possible. Our team is trained to handle a variety of animals and can assist with feeding, walking, and basic grooming.",
      "Pet care assistance is often combined with other services, providing comprehensive support that benefits both clients and their pets."
    ],
    images: [
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581极客时间-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-154606极客时间9901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Technology Assistance",
    desc: [
      "Technology assistance helps clients stay connected with family and friends, access information, and manage daily tasks. Our caregivers provide support with phones, tablets, computers, and smart home devices.",
      "We teach clients how to use technology safely and confidently, troubleshooting issues and providing ongoing support. Technology assistance can include setting up video calls, managing emails, or using health monitoring apps.",
      "Technology assistance is a valuable service that promotes independence and connection in an increasingly digital world."
    ],
    images: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Home Safety Assessments",
    desc: [
      "Home safety assessments help clients reduce the risk of falls and accidents by identifying and addressing potential hazards. Our caregivers evaluate the home environment and recommend modifications such as grab bars, non-slip mats, and improved lighting.",
      "We work closely with clients and families to implement safety measures that promote independence and peace of mind. Our team is trained to recognize common risks and provide practical solutions.",
      "Home safety assessments are an essential part of our holistic approach to care, ensuring that clients can live safely and confidently in their own homes."
    ],
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&极客时间w=400&q=80"
    ]
  },
  {
    title: "Night Care",
    desc: [
      "Night care provides overnight support for clients who need assistance during the night. Our caregivers are available to help with toileting, repositioning, medication reminders, and responding to emergencies.",
      "We understand that nighttime can be challenging for clients and their families, and we strive to provide reassurance and comfort. Our team is trained to handle a variety of situations with compassion and professionalism.",
      "Night care is a valuable service that promotes safety, comfort, and peace of mind for clients and their loved ones."
    ],
    images: [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b极客时间1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Specialized Dementia Care",
    desc: [
      "Specialized dementia care is tailored support for clients with Alzheimer’s or other forms of dementia. Our caregivers are trained to manage challenging behaviors, provide reassurance, and create a safe, structured environment.",
      "We use evidence-based techniques to promote engagement, reduce agitation, and maintain dignity. Our team works closely with families to provide education, support, and respite care.",
      "Specialized dementia care is a compassionate, holistic approach that honors each client’s unique journey and supports their family every step of the way."
    ],
    images: [
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    ]
  }

];

const DetailedCarePage = () => {
  const navigate = useNavigate();

  return (
    <div className="detailed-care-root">
      <header className="detailed-care-header">
        <div className="logo">
          <img src="/care_2871732.png" alt="CareConnect Logo" />
          <span className="care-text">Care</span>
          <span className="connect-text">Connect</span>
        </div>
        <nav className="detailed-care-nav">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/guides">Guides</Link>
        </nav>
        <div className="profile-dropdown">
          <button className="profile-icon">👤</button>
        </div>
      </header>
      <section className="detailed-care-main">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          Back to Dashboard
        </button>
        <h2 className="main-title">Detailed Care Services</h2>
        <p className="main-subtitle">Explore all the care services we offer in detail.</p>
        
        {careTypes.map((care, i) => (
          <div key={i} className="care-section">
            <h3 className="care-title">{care.title}</h3>
            <div className="care-images">
              {care.images.map((img, j) => (
                <img key={j} src={img} alt={`${care.title} ${j + 1}`} />
              ))}
            </div>
            <div className="care-desc">
              {care.desc.map((para, k) => (
                <p key={k}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="additional-info">
        <h2>Additional Information</h2>
        <p>
          Our care services are tailored to meet your unique needs. Contact us to learn more about how we can support you or your loved ones.
        </p>
      </section>
    </div>
  );
};

export default DetailedCarePage;
