import Image from 'next/image';
import Navbar from '../components/Navbar'

const FirstParishChurch = () => {
  return (
    <main >
    <Navbar />
    <div className="relative bg-white">
      <div className="relative h-screen overflow-hidden">
  <Image
    src="/images/sites/Drop/2-ICON-Drop-me-a-line-sandwich-board-min (1) (1) (1)_11zon.webp"
    alt="First Parish Church"
    layout="fill"
    objectFit="cover"
    objectPosition="top"
    className="z-0"
  
  />
  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white p-6">
    <div className="bg-white bg-opacity-75 p-4 rounded">
      <h2 className="text-6xl font-bold mb-8 text-[#1C5C2D]">DROP ME A LINE</h2>
      <p className="text-lg text-[#1C5C2D] font-bold">615A Congress Street.</p>
    </div>
  </div>
</div>


      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
      <audio controls>
            <source src="./audio/DropMeALineV2_mixdown.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-lg text-gray-700 px-5 overflow-hidden break-words">
            One of Portland's first openly gay-owned businesses was Drop Me A Line. While in operation, it occupied several locations on the first floor of the State Theater Building.  Primarily a card and gift shop, Drop Me a Line first opened on the High Street side of the building in 1990, and then moved around the corner to two locations on the Congress St. side.
        </p>
      </div>

      <div className="container mx-auto max-w-2xl py-6 overflow-y-auto">
       
        <h2 className="text-4xl font-bold text-center mb-10  text-[#E2D6AF]">Photos</h2>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/1-The-storefront-of-Drop-Me-A-Line-in-Portland_-Maine-in-1990.-By-Roger-Mayo-min (1).webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>The storefront of Drop Me A Line in Portland, Maine in 1990. By Roger Mayo</p>
            </div>
          </div>
          <div style={{ marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/6 Roger Mayo and Jim Neal inside Drop Me A Line Community Pride Reporter July 1993 p 8 (1) (1).webp"
              width={250}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>Drop Me A Line sandwich board sign, from Roger Mayo</p>
            </div>
          </div>
          <div style={{  marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/3-yer-twisted-sign-for-the-store-within-Drop-me-a-line (1)_11zon_11zon_11zon.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Yer Twisted was a section in Drop Me A Line. From Roger Mayo</p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/4-_Maine-in-Pink_-guide-produced-by-Drop-Me-A-Line-and-Our-Paper_-Spring-1991 (1) (1)_11zon.webp"
              width={250}
              height={250}
              objectFit='cover'
            />
            <div style={{ width: '250px', fontSize: '10px' }}>
              <p>"Maine in Pink" guide produced by Drop Me A Line and Our Paper, Spring 1991 from Our Paper, February 1991. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.
              <a href=" https://digitalcommons.usm.maine.edu/our_paper_sac/11/"> https://digitalcommons.usm.maine.edu/our_paper_sac/11/ </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/5 Drop me a line staff ourside of the store. Community Pride Reporter July 1993 (1).webp"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Drop me a Line staff outside of the store. Community Pride Reporter, July 1993, pg 8. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.    
              <a href=" https://digitalcommons.usm.maine.edu/cpr/65 "> https://digitalcommons.usm.maine.edu/cpr/65 </a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/6 Roger Mayo and Jim Neal inside Drop Me A Line Community Pride Reporter July 1993 p 8 (1) (1).webp"
              width={350}
              height={350}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Owners Roger Mayo (right) and Jim Neal (left) inside the store. Community Pride Reporter, July 1993, pg 8. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections.
              <a href=" https://digitalcommons.usm.maine.edu/cpr/65"> https://digitalcommons.usm.maine.edu/cpr/65</a></p>
            </div>
          </div>
          <div style={{marginRight: '20px', textAlign: 'center', color: 'black' }}>
            <Image
              src="/images/sites/Drop/7 Jim Neal with transgender actress Lady Chablis at a book signing at Drop Me A Line in 1997.webp"
              width={300}
              height={300}
              objectFit='cover'
            />
            <div style={{ width: '300px', fontSize: '10px' }}>
              <p>Jim Neal with transgender actress Lady Chablis at a book signing at Drop Me A Line in 1997. By Roger Mayo </p>
            </div>
          </div>
          </div>

          <p className="text-lg text-gray-700 px-5 overflow-hidden break-words">
          On July 1st 1990, Jim Neal and Roger Mayo opened the small card and gift shop, Drop Me a Line, at 144 High St. The neighborhood was a little rough, as Jim Neal acknowledged:"When we opened the store, the State Theater was a porn theater. We understood what the neighborhood was like: from Congress Square to State Street there were two porn theaters and a couple of adult bookstores. This area was like our Times Square. Nobody was opening retail." <br/><br/>

        But according to Roger,"We just threw caution to the wind and rented a little storefront down on High Street. I think it was 235 square feet - way too small; six months into it and we realized we weren't going to make any money there. Then the woman that owned the building decided she was going to renovate and make the State Theater into a performance space. We were told, 'We need your space for the kitchen.' And I said, 'Oh wow. I bet you're really disappointed that we've got an eight-year lease."'<br/><br/>

        When asked to break their lease, Jim Neal responded"'Where are we going to go? We can't afford to go someplace else.' So they bought us out of that lease. They dropped our rent. And they used their maintenance crew to move us around the corner into 615A Congress Street."<br/><br/>

        The move around the corner offered not only a bigger space but more visibility. Drop Me a Line soon became the place to find campy greeting cards, magazines, alternative weeklies, kitschy trinkets, costume jewelry, and lovely pressed-flower notecards created by a local artist. The store was also famous for its holiday windows which benefited from Jim Neal's artistic skills.  When they moved again to an even bigger space at 611 Congress St. with more prominent windows, Jim could really let his creativity run wild with holiday window displays modeled on those they had seen in New York City. The larger space also allowed them to create a specific section of their store called"You're Twisted" for more adult-oriented material.	<br/><br/>

        The fact that among the diverse cards and objects were explicitly gay materials was very unusual for the time. According to Roger,"We bought beautiful things and funny things, including trifold, naked-man cards. At that time there was only one store in Portland that sold some of that stuff, but you had to ask for the box with gay cards and they'd bring it out from under the counter. We thought 'That's not going to happen in our store. We're putting them on the rack.'
        <br/><br/>
        Jim Neal confirmed"As far as I know, in terms of retail storefronts operating during the light of day, there weren't any others that explicitly included the gay community. We were going to be that. We wanted to be a store owned by gay people that acknowledged the gay community where the gay population and their allies shopped. I remember this company called us up before they shipped our order and said, 'Do you really want like 100 pink triangle buttons?'  I think so; we were the only place you could buy those."<br/><br/>

        Drop Me a Line also did book signings and sold tickets for any gay-related event from Gay Men's Chorus concerts to Pride Dances to fundraisers for the Peabody Center. As a result, the store became something of an informal community center or gay Chamber of Commerce.  As Jim observes"That wasn't our intention. It's just that we wanted to not ignore our community and we naively underestimated the impact that that would have."<br/><br/>

        While they may not have intended for the store to be political, the 1990s in Maine made it hard to avoid. As Roger notes, the same year they opened the store,"the legislature failed to pass the Equal Rights Amendment again. A friend, Mike Marshall, who produced the news at Channel 6 called me at the store. 'I've called literally everybody in the state, but can't get anybody to go on camera and say that they're gay. Will you do it?' And I said, 'Will you film it in my store?' And he said, 'Yes.' So I said, 'Come on down!'   They filmed me at Drop Me a Line talking about the law and how disappointing it was and why it should have been passed. I'll tell you, we had gay people coming in the store from every corner of the state after that."<br/><br/>

        Drop Me A Line remained in business for 15 years, finally closing in 2005. As Jim Neal explained,"Part of the problem was that we didn't sell anything that you needed, just everything you wanted. So our business was solely dependent on discretionary income and, in those years, the community was engaged in big civil rights battles. People decided - and rightly so - 'we're not going to do holiday presents this year. We're giving our money to Maine Won't Discriminate.' We tried moving the store to the Old Port 2004 but we'd grown tired. We've been doing it for 16 years and we closed in June of 2006."<br/><br/>

        The role of Drop Me a Line as an unofficial queer community center has now been assumed by an actual designated"Equality Community Center" on Casco St. in downtown Portland. And, of course, it is more common now to see things like rainbow jewelry, lesbian erotica, and spicy leatherman cards at most indie gift and book shops. But businesses like Drop Me A Line paved the way for other retailers seeking to serve underrepresented communities who might otherwise rarely see themselves in a commercial environment. The shop may be gone, but Drop Me A Line ensured that Portland would be a little brighter, a little bolder, and a lot more fun. 

          </p>
          <h2 className="text-4xl font-bold text-center mb-10 mt-20 text-[#E2D6AF]">Sources </h2>
          <p className="text-lg text-gray-700 px-5 overflow-hidden break-words">
           "Business Profile: Drop me a Line" Our Paper, December 1990, pg 4. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href=" https://digitalcommons.usm.maine.edu/our_paper_sac/12"  style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/our_paper_sac/12</a>
            <br/><br/>
            
           "Classifieds" Our Paper. February 1991. Pg 16. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href=" https://digitalcommons.usm.maine.edu/our_paper_sac/12"  style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/our_paper_sac/11</a><br/><br/>
            
            Chapkis, Wendy, "Mayo, Roger" (2023). Querying the Past: LGBTQ Maine Oral History Project Collection. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special.    <a href="https://digitalcommons.usm.maine.edu/querying_ohproject/99/"  style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/querying_ohproject/99/</a>
            <br/><br/>


           "Here to stay" Community Pride Reporter, July 1993, pg 8. LGBTQ+ Collection, Jean Byers Sampson Center for Diversity Maine, USM Special Collections. <a href=" https://digitalcommons.usm.maine.edu/cpr/65"  style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/cpr/65</a><br/><br/>
          </p>
        </div>
        </div>
        
        
</main>
  );
};

export default FirstParishChurch;