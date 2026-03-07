import './SecondNav.css'

export default function SecondNav({ activeNav }) {

  const navContent = [
    (
      <div className='secondnav_container'>
        <div>A homepage is the main webpage of a website that serves as an entry point for visitors.</div>
        <div>It usually contains navigation links and an overview of the website.</div>
      </div>
    ),
    (
      <div className='secondnav_container'>
        <div>Google is a search engine that helps you find information on the internet.</div>
        <div>It was founded in 1998 and is one of the biggest tech companies.</div>
      </div>
    ),
    (
      <div className='secondnav_container'>
        <div>Instagram is a social media platform for sharing photos and videos.</div>
        <div>Users can follow others, like posts, and upload stories.</div>
      </div>
    ),
    (
      <div className='secondnav_container'>
        <div>YouTube is a video-sharing platform.</div>
        <div>Users can upload, watch, and share videos on different topics.</div>
      </div>
    ),
    (
      <div className='secondnav_container'>
        <div>TikTok is a short-form video platform.</div>
        <div>It is popular for entertainment, trends, and creative videos.</div>
      </div>
    ),
    (
      <div className='secondnav_container'>
        <div>Twitter (X) is a social media platform for posting short messages.</div>
        <div>Users can share news, opinions, and updates in real time.</div>
      </div>
    )
  ];

  return (
    <div className='secondnav'>
      {navContent[activeNav]}
    </div>
  );
}