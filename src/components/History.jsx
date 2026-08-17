import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/History.scss';
import tmaPaiImage from '../assets/mgm-pic/tmapai.png';
const History = () => {
  return (
    <div className="history-page">
      {/* Hero Section */}
      <section className="inner-hero history-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Legacy: The History of MGM</h1>
            <p className="red-text">A tradition of pioneering education since 1949.</p>
            <div className="breadcrumb">
              <a href="/">Home</a> / History
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="history-content content-blocks">
        <div className="container">
          <div className="history-image-container">
            <img 
  src={tmaPaiImage}
  alt="MGM College historic photo or campus image" 
  className="history-main-image" 
/>
          </div>

          {/* Overview Block */}
          <article id="overview" className="history-block">
            <h2 className="section-title">History Overview</h2>
            <p>
              The <strong>Mahatma Gandhi Memorial College</strong>, founded in <strong>1949</strong>, was the brainchild of the late <strong>Dr. T.M.A. Pai</strong>, the architect of modern Manipal. Located in the sylvan terrain of Sagri, close to Manipal—International centre for education, this institution is a premier Arts, Science and Commerce College in the district. MGM was the beacon, Manipal followed and MAHE flowered, transforming the topography into the “Education Kashi of South India.”
            </p>
            <p>
              Over the past five and a half decades, the College has witnessed both academic and infrastructural growth and has opened new vistas in the educational and cultural history of this part of coastal Karnataka. It has enriched the lives of hundreds and thousands of young men and women and inspired educationists and philanthropists of erstwhile South Kanara to start similar temples of learning elsewhere. Veritably, the College is a torchbearer and trendsetter in the field of higher education.
            </p>
          </article>
          <hr />

          {/* Hurdles Block */}
          <article id="hurdles" className="history-block">
            <h2 className="section-title">Need For a College and Hurdles</h2>
            <p>
              The Mahatma Gandhi Memorial College, Udupi, was founded in 1949 to fulfill the aspirations of the northern parts of the Dakshina Kannada District which till then could boast of only two colleges, both situated in Mangalore. The need for a college in this era was keenly visualized by <strong>Dr. T. Madhava A. Pai</strong>, whose dream was to better the life of his people by bringing opportunities to their doors. He could inspire a band of enlightened citizens of Udupi to work for the founding of a college in this town. The obstacles in the way were so severe that Dr. Pai, at one stage, had even to return the donations he had collected for the purpose of raising the funds required for the establishment of the college.
            </p>
            <p>
              But Dr. Pai, a man of grit that he was, did not give up the idea that he had cherished for long and created a public opinion in favour of the college, thawed the icy mind of unwilling donors, blew the mist of misgivings, persuaded liberal minded men to unstring their purse and bent the will of the reluctant authorities of the government and the university of Madras and secured the permission to found a college in the practically rural environs of Udupi. Dr. Pai's perseverance in this regard was equal to the legendary perseverance of Bhagiratha, who brought the Heavenly waters of Ganga down to the earth.
            </p>
            <p>
              Hurdles in the path were many. The Gods of the University were again unwilling to allow lady students to be admitted to the college. One <strong>Shantha</strong>, asserted her democratic right of equality by approaching the High court of Madras. The famous <strong>"Shantha Versus University of Madras"</strong> was fought on the question of equality of rights ensured by the Indian Constitution. The matter, then in the court of Governor Sri Prakash, was settled in favor of girls with the intervention of <strong>Smt. Indira Gandhi</strong> who was then only the daughter of her father Jawaharlal Nehru. Yes, those were the days of herculian struggle and gratifying reward.
            </p>
            <p>
              Once Dr. Pai's sincerity was realized, the support he got became Spontaneous and overwhelming. The Swamijis of Udupi blessed the project. The public of Udupi rendered <strong>Shramadan</strong> to raise the building on the site at Sagri where the college, started first in the rooms let by an elementary school, was shifted in the year <strong>1952</strong>. A band of eminent citizens of Udupi rallied behind Dr. Pai and the dream of the college became a reality. That is the story of five decades ago and the college has witnessed in this course of period phenomenal growth and expansion. It became a premier institution sponsored by the <strong>Academy of General Education, Manipal</strong> and a source of inspiration to the citizens of many other towns in the district who approached Dr. Pai for advice in the matter of starting new colleges. Thus began an era of higher education in this district which led to its economic revolution too. On the threshold of the Golden Jublee year 1999 the college can look back with pride upon the different stages of development and growth, including the recent inauguration of <strong>Madhav Raksha</strong>, the magnificent new administrative block by Hon'ble Minister for Human resources development, Dr. Murali Manohar Joshi on the occasion of inaugurating the Birth Centenary Celebration of our Founder Dr. T. M.A. Pai.
            </p>
          </article>
          <hr />

          {/* Founder Block */}
          <article id="founder" className="history-block founder-block">
            <h2 className="section-title">Our Founder: Dr. T. M. A. Pai</h2>
            <p>
              Dr. T M A Pai, <strong>Tonse Madhava Ananth Pai</strong>, born on <strong>April 30, 1898</strong>, was one of the architects of modern Karnataka. He was, from the economic and social standpoint, an ordinary man. The triumph of Dr. Pai was in breathing new life into the Indian context, in establishing in a rural track like Manipal an education complex with the dimensions of a University, an ultra-modern hospital, small industries and outstanding banking institutions. <strong>Dr. Thonse Madhava Anantha Pai</strong>
            </p>  
            <h3>A Visionary's Journey</h3>
            <p>
              Dr. Pai practised surgery for 15 years. But realizing the dire need to assure economic security to the poor and also to teach them lessons in savings, he gave up his medical practice in favour of banking. Soon he established the <strong>Syndicate Bank</strong> which helped greatly in transforming the lot of the poor section of the society.
            </p>
            <p>
              In <strong>1933</strong> Dr. Pai bought 107 acres of land on top of a rocky hill 3 miles to the east of Udupi. The place then called "Mannapalla" in the local Tulu vernacular, meaning mud pond, became <strong>Manipal</strong>, the modern name for the region atop the hill.
            </p>
            <p>
              Initially the Pai brothers established a few small scale diverse industries there, including a tile factory, a T. B. sanatorium (1934), and a weaving factory. In <strong>1948</strong> he started the <strong>"Academy of General Education"</strong>. He started the <strong>Mahatma Gandhi Memorial College in 1949</strong> amidst many challenging circumstances, a success which inspired him to start a medical college in Manipal in private sector.
            </p>
            <p>
              Following KMC, three more professional colleges followed: the Manipal Engineering College (<strong>1957</strong>) (now MIT), the Udupi Law College (<strong>1957</strong>) (now Vaikunta Baliga College of Law), and the Manipal College of Education (<strong>1965</strong>) (now Dr. T M A Pai College of Education). Today, Manipal is a teeming township of modern amenities.
            </p>
            <p>
              Dr. Pai's eventful life came to its close on <strong>May 29, 1979</strong>. His institutions serve to remind the generations in future that there was a miracle man called Dr. T M A Pai.
            </p>
          </article>
          <hr />

          {/* Principals Block */}
          <article id="principals" className="history-block">
            <h2 className="section-title">Principals of the College</h2>
            <p>
              Our founder principal was <strong>Prof. H. Sunder Rao</strong>. He was a man of great discipline and decorum, he established a tradition of discipline and academic commitment in the college. The golden era of development of college in all directions began when <strong>Prof. K. S. Haridas Bhat</strong> became the Principal of the college in 1964. During the 14 years of his tenure as Principal the college virtually became a mini university.
            </p>
            <div className="principals-list-container">
              <div className="principals-column">
                <h3>College Principals</h3>
                <ul className="governance-list">
                  <li><strong>Prof. H. Sunder Rao</strong> (1949-64)</li>
                  <li><strong>Prof. K. S. Haridasa Bhat</strong> (1964-79)</li>
                  <li><strong>Prof. K. Ramadas</strong> (1979-84)</li>
                  <li><strong>Prof. K. K. Eshwaran</strong> (1984-88)</li>
                  <li><strong>Prof. K. Rama Bhat</strong> (1988-90)</li>
                  <li><strong>Prof. Dr. Alwyn D'Souza</strong> (1990-94)</li>
                  <li><strong>Prof. K. Shreesha Acharya</strong> (1994-97)</li>
                  <li><strong>Prof. Dr. P.N. Narasimha Murthy</strong> (1997-98)</li>
                  <li><strong>Prof. Sam Daniel</strong> (1998-2001)</li>
                  <li><strong>Prof. Dr. Gopalan Puthusseri</strong> (2001-2002)</li>
                  <li><strong>Prof. Ganapathi Bhat</strong> (2002-2004)</li>
                  <li><strong>Prof. Malpe Laxminarayana Samaga</strong> (2003-2007)</li>
                  <li><strong>Prof. Dr. Jayaprakash Mavinakuli</strong> (2007-2009)</li>
                  <li><strong>Prof. Dr. Venkatramana Gowda</strong> (2009-2013)</li>
                  <li><strong>Prof. Dr. N. Hala Naik</strong> (2013-2014)</li>
                  <li><strong>Prof. Mrs. K Kusuma Kamath</strong> (2014-2017)</li>
                  <li><strong>Dr. Mrs. Sandhya R Nambiar</strong> (2017-2018)</li>
                  <li><strong>Dr. M. G. Vijaya</strong> (2018-2020)</li>
                  <li><strong>Dr. Devidas S. Naik</strong> (2020-2022)</li>
                  <li><strong>Prof. Laxminarayana Karanth</strong> (2022-2025)</li>
                  <li><strong>Prof. Vanitha Maiya</strong> (2025-todate)</li>
                </ul>
              </div>
              <div className="principals-column">
                <h3>Pre-University College Principals</h3>
                <ul className="governance-list">
                  <li><strong>Prof. Padmavathi Badikillaya</strong> (2001-2007)</li>
                  <li><strong>Prof. Arun Kumar</strong> (2007-2008)</li>
                  <li><strong>Prof. Anasooya Karkera</strong> (2008-2009)</li>
                  <li><strong>Mrs. Malathi Devi A</strong> (2009-todate)</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default History;