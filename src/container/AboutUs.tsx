import React from 'react';

interface Props{
}
const AboutUsContainer: React.FC<Props> = ({}) => {


  return (
    <div className='about-us template'>
        <article className="template-circle-header about-us__header template-circle-header--secondary">
            <div className="template-circle-header__content">
                <div className="template-circle-header__content-copy">
                    <h1 className="template-element-title--header ">
                    </h1>
                    <p><strong>Our mission</strong> is to help people find their perfect puppy and the love that comes with it.</p>
                </div>
                <picture className="">
                    <img id="" alt="" className=" template-circle-header__image lazyloading" data-cy="" data-src="" loading="lazy" />
                </picture>
            </div>
        </article>

        <section className="about-us__description">
            <article>
                <h3 className="about-us__description-title">About PuppySpot</h3>
                <p className="about-us__description-copy template-copy">We are a community of dog lovers, committed to connecting the nation’s top breeders to caring, responsible individuals and families. We hold ourselves and our customers to the highest standards and aim to improve the life of each puppy, breeder and owner who joins our family.</p>
            </article>
        </section>

        <section className="about-us__puppies-placed">
            <article className="about-us__puppies-placed-container">
                <div className="about-us__puppies-placed-image" style={{backgroundImage: "url('https://cdn.buttercms.com/t3WV6cnQuSjBz6lZWs3E')"}}></div>
                <div className="about-us__puppies-placed-copy">We have been in business for nearly 20 years.</div>
            </article>
        </section>

        <section className="about-us__experiences">
            <article>
                <h2>Real life-changing experiences</h2>
                <div className="about-us__experiences-video">
                    <div style={{position: 'relative', paddingTop: '56.25%'}}>
                    <iframe src="https://customer-4tih2bjymu20uxxn.cloudflarestream.com/b47e6aea90a39058cd76d24e4c8e5e74/iframe?poster=https%3A%2F%2Fcustomer-4tih2bjymu20uxxn.cloudflarestream.com%2Fb47e6aea90a39058cd76d24e4c8e5e74%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D24s%26height%3D600" style={{border: 'none', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%'}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true}></iframe>
                    </div>
                </div>
            </article>
        </section>


        <section className="about-us__leadership">
          <article>
              <h2>Leadership</h2>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/4ltrLURWSjigswOc9vkf" />
                      <div className="about-us__leadership-content">
                          <h4>Claire Komorowski</h4>
                          <h5>CEO, aka Chief Puppy Officer</h5>
                          <p></p><p>I’m a mom of three adorable kids, one snuggly Bernedoodle named Casey (courtesy of PuppySpot), and am married to a great guy. I grew up in Michigan (go Blue!) and our family always desired to have puppies…but I was allergic. My family waited until I left for college to bring “Bart the Wonder Dog (Welsh Corgi)” home. He immediately stole our hearts. My professional path has focused on leading teams or companies in service first industries, with my most recent pre-PuppySpot job running Sales Strategy &amp; Operations for HomeAdvisor (now known as Angi). I joined the PuppySpot team as head of Revenue Operations in 2019 because I believe puppies positively impact peoples’ lives. Casey joined our family in 2020, by then I knew there was no better place to find our perfect puppy. I was promoted to CEO in 2021, a role I am thrilled to play. My family and I now live happily in central New Jersey.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/V0tBVtXJSqGf9bGt6LKo" />
                      <div className="about-us__leadership-content">
                          <h4>Jeff Coughlin</h4>
                          <h5>Vice President, Finance &amp; Strategic Analytics aka Dr. Data</h5>
                          <p></p><p>I am relatively new to the PuppySpot team, having served as Director of Analytics for Digital Fuel Capital and before that as Senior Data Scientist at Care.com and an Economic Analyst at the Economic Development Research Group. As you can no doubt infer, data is my thing. But so is playing with my kids, and sneaking in a long run here and there. Our family members include two guinea pigs, Charlotte and Poppy. The kids are pressing hard for a puppy, which means we’re going to become a PuppySpot customer very soon.&nbsp;</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/XD79qQKJQJmdphYTqcRD" />
                      <div className="about-us__leadership-content">
                          <h4>Aimee Venot</h4>
                          <h5>Vice President, Product and Technology, aka the CXpert</h5>
                          <p></p><p>Hello from Chicago where my soon to be husband and I live. I am sort of a newbie at PuppySpot, since most of our team members have been with us for a long time, because who wouldn’t want to work with puppies? I joined in May 2023 as Vice President of Product and Technology which means I am here to make sure we deliver an amazing customer experience on the PuppySpot website and do it all as efficiently as possible. My team is also amazing, we love what we do. Before coming to PuppySpot, I held different roles at Ruggable, Home Chef, and Nielsen. I learned firsthand that great companies are great at customer experience, and so that’s what we are after here. I grew up in Cleveland, Ohio, home of the Rock and Roll Hall of Fame, Cleveland Browns, and many other things. When I have a free moment, I like digging in the dirt in my garden, making delicious meals with friends, and hitting the road to explore the wonders of the world.&nbsp;</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/AiqeNI2DTe6XHl3EU4aE" />
                      <div className="about-us__leadership-content">
                          <h4>Carolyn Edwards</h4>
                          <h5>Vice President, Marketplace Operations aka the Coach</h5>
                          <p></p><p>I joined the amazing PuppySpot team in January 2023 to work with our national network of certified breeder partners on how together we can continue to provide perfect puppies to our customers in the most perfect way. It’s been a blast thus far; all great people doing a really important job: delivering unconditional love. Prior to PuppySpot I ran operations for a company called Palmetto and before that had a long stint at GrubHub, where I ended up as Senior Director, Merchant Strategy and Operations. Geographically, I have been a bit of a pinball. I was born in Chicago (still a Bears and Cubs fan), now live in San Diego, and am moving to Philadelphia with my wife and Addision and Billie, our two Labradoodles for a two year stint. As a kid I had a cat named Laila, a Welsh Springer Spaniel named Buddy, and an slobbery Chocolate Lab named Guinness which, in retrospect, seems appropriate. I have loved playing or watching sports my whole life. From kickball and tennis to cycling, soccer and flag football, I think any game is a good game. And my new thing is pickleball, although I get that the “Thwack” can be annoying!</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/jF7Q9gCqTH2lhw7Zgat7" />
                      <div className="about-us__leadership-content">
                          <h4>Alisha Randy</h4>
                          <h5>Director, People &amp; Recruiting aka the Perfect Puppy People Officer</h5>
                          <p></p><p>Some people call me a Jersey girl, because, well, I did in fact grow up in New Jersey. I spent 12 zany years in Manhattan and now live in bucolic Saddle River with my partner Joe, our beautiful and bright red-headed daughter Zoey, and Jagger, our Boston Terrier. I joined PuppySpot in 2019 after almost a decade as an Executive Recruiter for JSB Partners, boutique executive recruiting firm. Think Hedge Funds, Private Equity, and Investment Bank. I ended up being promoted to Vice President Executive Recruiter. As much as I appreciated the recognition I came to realize that I wanted more. I wanted to really love my job. And that’s what led me to PuppySpot. I started out as the Recruiting Manager and was promoted to Director of People and Recruiting. My job is to help deliver on our promise of being “The Perfect Puppy People” by making sure we hire and retain team members with the empathy and expertise to deliver perfect puppies perfectly. I’m a devout animal lover, an avid kickboxer, and a fanatical kayaker, with Zoey, Jagger and Joe always in tow!</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/eOfD3FuhRGioND5tt0DP" />
                      <div className="about-us__leadership-content">
                          <h4>Stuti Thakor</h4>
                          <h5>Director of Digital Marketing</h5>
                          <p></p><p>Let’s get this right out of the way. I am the proud mom to one of the cutest Golden Retrievers around, and his name is Zeus.&nbsp; He doesn’t so much look like the Greek God, but he does rule my world.&nbsp; We live in Castle Pines, Colorado, a rural suburb of Denver, with tons of parks, which you know who loves. I have been a long-time dog lover and informal activist for the betterment of puppies everywhere and bringing to light the truths around responsible breeding and responsible pet ownership. It’s a big reason I joined PuppySpot because I so believe in the work we are doing and the standards we are setting as the leading puppy adoption service in America. Prior to joining the team I worked at Sling TV, managing all the digital media and before that at a small but mighty digital agency.&nbsp;</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/Vi9Ls6DOQ62Swk6jjwJK" />
                      <div className="about-us__leadership-content">
                          <h4>Cherie Pidcoe</h4>
                          <h5>Director Breeder Experience</h5>
                          <p></p><p>Hello y’all! Greetings from Palm Bay, Florida. As Director Breeder Experience it is my job to make sure that our breeder partners are fully supported and feeling great about their partnership with us. I’ve been at PuppySpot for many years and have spent most of my life working with animals, including being a veterinarian technician and operating a Doberman Rescue service. Right now I have three dogs, Brodi a Biewer Terrier, Jax a Yorkshire Terrier and George, a wee Chihuahua. Oh, and a cat named Oliver and two Cockatiels named Reese and Buttercup. Get it? My animals are my kids and completely rule my house, which means me.&nbsp;Other things I love: gardening, scuba diving, boating, thrift stores, garage sales and having beach days with my doggies.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/3s0RY5ZQSOOt2mMrfd2c" />
                      <div className="about-us__leadership-content">
                          <h4>Cheyanna Ashley</h4>
                          <h5>Director of Breeder Development and Operations</h5>
                          <p></p><p>I live just south of Cherie in Fort Lauderdale, Florida, a sunny city on the East Coast and the temporary home of tens of thousands of college students every Spring Break. Don’t visit then! I’ve been with PuppySpot for over thirteen years, doing a variety of different jobs. My current role involves working closely with Carolyn Edwards to continue to improve and expand our breeder partner program. I love the work, love the team, and really love puppies. In fact I love animals, whether they have four legs or eight. If you stop by some time you will be greeted by Shelton, my Labdradoodle, a Corgi named Tyrion, three cats that go by Pandora, Persephone and Binx; Avocado, a Bearded Dragon; two tarantulas named Lillith and Bryaxis, and one hyperactive jumping spider dubbed Ghost Face. Yes, you read that right. Outside of tending to my flock I garden, read a lot and go to concerts when I can.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/0MyCQqB5QDu9a3uAh9Nm" />
                      <div className="about-us__leadership-content">
                          <h4>Lori Delgado</h4>
                          <h5>Product Manager</h5>
                          <p></p><p>Hi! I have been at PuppySpot for four years, serving in a product management role and loving it. I was born in Venezuela and now live in Colombia. Prior to joining the company, I worked for a range of telecom and IT startups. I have an MBA and BS, and a range of product and project management certificates. While I am proud of that, I am most proud of my family, my husband Alejandro, our sons Alejandro, David, and our beagle Tony Stark. When I have free time, which is not often, I calm down by doing yoga, I speed up by roller skating, and I get grounded by reading books on spirituality, psychology, and human purpose.&nbsp;</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/FTO7W2B3TKSZWFzlcOet" />
                      <div className="about-us__leadership-content">
                          <h4>Don Carmichael</h4>
                          <h5>QA Manager</h5>
                          <p></p><p>Howdy from Boise, Idaho, also referred to as The City of Trees, because, well, we have a lot of trees. It’s a beautiful place to live, and to raise a family, which means my wife, kids, a dog named Bailey and a cat named Sweet Pea. I joined PuppySpot in 2016 in the role of Quality Assurance Manager. As the “Perfect Puppy People” we are committed to achieving the highest standards of customer service and experience, and my job is to make sure we do. I joined PuppySpot because of that commitment to excellence and my lifelong love of animals. Prior to coming here I worked at The Knot, Spark Networks and Juice Wireless in similar quality and production roles.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/Fv7vWfdKSOti5mXBVcMj" />
                      <div className="about-us__leadership-content">
                          <h4>Carolyn Cohn</h4>
                          <h5> UI/UX Product Designer</h5>
                          <p></p><p>Hi there! I joined the wonderful PuppySpot team as the UI/UX Product Designer in late 2023. My days are dedicated to developing innovative design solutions and refining pixel-perfect details until they launch. The goal: a perfect online experience to help every customer find his or her perfect puppy. I was born and raised in New Jersey, surrounded by a menagerie of dogs, and a gaggle of chickens. There’s nothing quite like starting each day with fresh eggs for breakfast! Fast forward to today, I am a first-time mom to my adorable son and his buddy, Buddy, a precocious Pomeranian mix. Family, friends, and our furry (or feathered) companions are pretty much everything to us.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/rGqpn2ijQhmmqA70TdTf" />
                      <div className="about-us__leadership-content">
                          <h4>Grisha Reroma-Chester</h4>
                          <h5>Controller</h5>
                          <p></p><p>I first got introduced to PuppySpot as a customer, acquiring two delightful yorkies, Rowdy and Mr.King. I joined as our Controller in 2019. For those that don’t know, a Controller’s job is to make sure the finances of a company are well-managed and the company is in good financial health. And we are! Prior to PuppySpot I held similar roles at Sharp Electronics, Panasonic and Groupe SEB, a French company. I live in Nutley, New Jersey with my family. Oh, and I love salsa dancing. Don’t you?&nbsp;</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/SkgJwhWKRe6rCXm6L4J0" />
                      <div className="about-us__leadership-content">
                          <h4>Carrie Fitzgibbons</h4>
                          <h5>Logistics Manager - Travel</h5>
                          <p></p><p>Hi there.&nbsp; It's my teams mission is to ensure each puppy arrives at their perfect home safely and stress-free. I live in St. Charles, Missouri, just outside of St. Louis. I joined PuppySpot a couple of years ago after serving as Operations Manager at XPO Logistics. I have two dogs: Molly, a Labradoodle, and Banjo, a French Bulldog.&nbsp;Beyond my love for dogs, I enjoy music, sports and outdoor adventures with my husband, our two kids, and our family. In the travel department, we pay close attention to every detail to ensure a smooth and safe journey for each puppy.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/ad2mmuDQcqitjMOtvOGg" />
                      <div className="about-us__leadership-content">
                          <h4>Jannie Mandell</h4>
                          <h5>Manager, Systems Engineering</h5>
                          <p></p><p>Like a number of my teammates, I’ve been with PuppySpot for over a decade. Because who wouldn’t want to work for a company that’s all about delivering unconditional love? I live in Hollywood, Florida, loving the beach, the diversity of the cuisine, and the amazing friendships I have made while crafting. Oh, and loving my five goldfish: Bubbles, Sunflower, Mickey, America, Emma. They don’t bark or bite.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/OnZKelRNRqiIjwOrf6fh" />
                      <div className="about-us__leadership-content">
                          <h4>Theresa Miller</h4>
                          <h5>Profile Approval Manager</h5>
                          <p></p><p>I have been a proud member of the PuppySpot team for 13+ years and a passionate dog lover for even more years than that. I grew up with German Shepherds, Ginger, Princess I, and Princess II, and two Shepherd mixes, Melina and Amber. I’ve also loved and been loved by Shadow, a Lab Retriever; Frankie, a gentle Great Dane; two perky Poodles, Binky and Boo Boo; three Maltese, Howie, Albert and Colonel; Miss Priss, Jasper and Jacob, all Maltese designers; and Bandit, a rambunctious Cocker Spaniel mix. Today finds me living happily in North Carolina with two happy PuppySpot dogs, Marta, another German Shepherd and Eleanor, a miniature Labradoodle. Outside of work and loving my dogs, I dabble in photography, gardening, traveling, and occasionally curling up on the sofa with a good book.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/9uhQGpBPTRiNfxDijDeD" />
                      <div className="about-us__leadership-content">
                          <h4>Jeasca James</h4>
                          <h5>Puppy Manager Health Manager</h5>
                          <p></p><p>Hi y’all, a big hello from Atlanta, Georgia. I love my job, I love my puppies, and I love cooking. Every day and night I get to experience the unconditional love and adorable antics of my five dogs:&nbsp; Verdo the Great Dane, King Itachi the French Bulldog, Kyoshi and Kihachi, both Yorkshire Terriers and Gohan, a Cocker Spaniel. My household is rarely still but it sure is fun.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/zS41MFQQzm5LVB8q7ptA" />
                      <div className="about-us__leadership-content">
                          <h4>Joey Serafin</h4>
                          <h5>Puppy Concierge Manager</h5>
                          <p></p><p>I am in the relationship development business: connecting good people to their perfect puppies. I live in Canton, Connecticut, a charming, bucolic town in the middle of the state. I joined PuppySpot at the beginning of 2023 bringing with me a long puppy loving history including Beemer, the Lhasa Apso, Rocky the Black Lab, Casey the Chocolate Lab, Toby the Black Lab and Bantam the German Shepherd. Prior to PuppySpot I worked at Angi/Home Advisor. And prior to that I was, wait, a professional baseball player, drafted by the Chicago White Sox as a pitcher. All were great gigs, but this one is better.&nbsp;</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/8VeEJCL2Q3ghXfmbBAQn" />
                      <div className="about-us__leadership-content">
                          <h4>Stephanie Cooper</h4>
                          <h5>Puppy Concierge Team Lead</h5>
                          <p></p><p>Howdy from Lufkin, Texas, one of the greenest and prettiest parts of the Lone Star State. I have been in the puppy profession for many years, including breeding Standard Poodles and serving as a puppy chaperone, which means accompanying puppies from a breeder to the customer. I joined PuppySpot a few years back, first as a Puppy Expert, which I like to think I am, and then promoted to puppy placement lead. We like to say we’re not here to sell, we’re here to help good people find their perfect puppy. I have a Toy Poodle by the name of Gidget and a beautiful little Pekingnese named Torey who I show.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/iFbvOVcVRlfhyzufUm3m" />
                      <div className="about-us__leadership-content">
                          <h4>Paul White</h4>
                          <h5>Puppy Concierge Manager</h5>
                          <p></p><p>I grew up in Miami, Florida. I've been in sales virtually all my life, starting in car sales and eventually moving to the timeshare industry, where I first gained experience as a floor manager. In 2021, I found an opportunity to join PuppySpot, where I now work as a Puppy Placement Manager. I love everything I do here, coaching and motivating my team and helping puppies find their forever homes. I have a mini Goldendoodle named Lucy, and in my free time, I enjoy working on my cars as an amateur mechanic and spending time with my family.</p><p></p>
                      </div>
                  </div>
                  <div className="about-us__leadership-card" style={{marginBottom: '1rem'}}>
                      <img className="about-us__leadership-image" src="https://cdn.buttercms.com/a3KaYARvTY6Dft5N37gb" />
                      <div className="about-us__leadership-content">
                          <h4>Jacob Alvarez</h4>
                          <h5>Puppy Concierge Manager</h5>
                          <p></p><p>I love my job, I love my son, and I love my tiny Shih Tzu Chase, who just turned 14 years young. I’ve been at PuppySpot for four years, serving as a Puppy Placement Manager, which means I am responsible for making sure that we deliver perfect puppies in a perfect, stress free way. Prior to joining PuppySpot I’ve held a variety of sales and sales management positions, which has allowed me to learn the critical importance of motivation and inspiration in the work world equation.&nbsp; Outside of work, I hang out as much as possible with my son, because he motivates and inspires me in life.&nbsp;</p><p></p>
                      </div>
                  </div>
          </article>
        </section>

        <section className="about-us__coverage">
            <h2>Coverage</h2>
                      <div className="about-us__coverage-container js-article-container first show js-article-container-0">
                        <article className="about-us__coverage-article">
                            <a href="https://future.a16z.com/marketplace-100/">
                                <p className="about-us__coverage-title">The Marketplace 100: 2022</p>
                            </a>
                            <span className="about-us__coverage-source">A16Z Future</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://news.yahoo.com/two-thirds-americans-claim-spare-191253758.html">
                                <p className="about-us__coverage-title">Two-thirds of Americans claim they spare no expense when it comes to their furry companions</p>
                            </a>
                            <span className="about-us__coverage-source">Yahoo! News</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://www.wtsp.com/article/life/heartwarming/child-dream-come-true-make-a-wish-southern-florida/67-876d3dd4-2b6a-4286-9d6a-400e6d499247">
                                <p className="about-us__coverage-title">Make-A-Wish Southern Florida gifts 2-year-old with Goldendoodle puppy</p>
                            </a>
                            <span className="about-us__coverage-source">CBS Tampa Bay</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://6abc.com/make-a-wish-puppy-surprise-wish-day-gloucester-city-new-jersey/11535059/">
                                <p className="about-us__coverage-title">Make-A-Wish, PuppySpot surprise 8-year-old South Jersey girl with puppy</p>
                            </a>
                            <span className="about-us__coverage-source">ABC Philadelphia</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://www.gobankingrates.com/money/jobs/companies-with-pawternity-leave/">
                                <p className="about-us__coverage-title">6 Major Companies That Offer Pawternity Leave for Pet Parents</p>
                            </a>
                            <span className="about-us__coverage-source">GoBankingRates</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container js-article-container-1 show">
                        <article className="about-us__coverage-article">
                            <a href="https://www.today.com/pets/make-wish-sees-rise-requests-pandemic-puppies-t243044">
                                <p className="about-us__coverage-title">Make-A-Wish sees surge in puppy wishes during pandemic</p>
                            </a>
                            <span className="about-us__coverage-source">Today</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://patch.com/connecticut/hartford/have-little-faith">
                                <p className="about-us__coverage-title">Hartford Resident Gets a Furry Friend that Never Leaves Her Side</p>
                            </a>
                            <span className="about-us__coverage-source">Patch</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://time.com/6077005/choosing-pandemic-pets-over-work/">
                                <p className="about-us__coverage-title">Some Workers Are Choosing Their Pets Over Their Jobs as Offices Reopen</p>
                            </a>
                            <span className="about-us__coverage-source">TIME</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://www.bostonglobe.com/2021/06/03/magazine/lockdown-unleashed-runaway-pandemic-puppy-economy-is-it-here-stay/">
                                <p className="about-us__coverage-title">Lockdown unleashed a runaway pandemic puppy economy. Is it here to stay?</p>
                            </a>
                            <span className="about-us__coverage-source">Boston Globe</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://wish.org/la/vaughns-wish-have-puppy">
                                <p className="about-us__coverage-title">Vaughn's Wish to have a Puppy</p>
                            </a>
                            <span className="about-us__coverage-source">Make-A-Wish® Greater Los Angeles</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container js-article-container-2 show">
                        <article className="about-us__coverage-article">
                            <a href="https://www.pawtracks.com/dogs/online-scams-puppies/">
                                <p className="about-us__coverage-title">Purchasing a new puppy? Beware of online scams</p>
                            </a>
                            <span className="about-us__coverage-source">Pawtracks</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.kgw.com/article/features/portland-girl-with-sickle-cell-anemia-gets-dream-puppy-through-make-a-wish/283-522818873">
                                <p className="about-us__coverage-title">Portland girl with sickle cell anemia gets dream puppy through Make-A-Wish</p>
                            </a>
                            <span className="about-us__coverage-source">NBC Portland</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://miami.cbslocal.com/2021/04/12/make-a-wish-girl-brain-cancer-labradoodle/">
                                <p className="about-us__coverage-title">Homestead Girl With Brain Cancer Gets Furever Companion Thanks To Make-a-Wish</p>
                            </a>
                            <span className="about-us__coverage-source">CBS Local</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://wsvn.com/news/local/make-a-wish-foundation-gifts-5-year-old-puppy-after-third-open-heart-surgery/">
                                <p className="about-us__coverage-title">Make-a-Wish Foundation gifts 5-year-old puppy after third open-heart surgery</p>
                            </a>
                            <span className="about-us__coverage-source">Miami News Channel 7</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://wish.org/la/vaughns-wish-have-puppy">
                                <p className="about-us__coverage-title">Daniel Makes A New Furry Friend</p>
                            </a>
                            <span className="about-us__coverage-source">Make-A-Wish® New Jersey</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container js-article-container-3 show">
                        <article className="about-us__coverage-article">
                            <a href="https://money.com/dog-scam-puppy-breeder/?utm_source=pushnami&amp;utm_medium=push&amp;utm_campaign=20201218&amp;utm_content=puppy-scams">
                                <p className="about-us__coverage-title">Saddest Scam of the Season? Paying Thousands for Dogs That Don't Exist</p>
                            </a>
                            <span className="about-us__coverage-source">Money.Com</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://www.nytimes.com/2020/07/30/travel/private-jets-coronavirus.html">
                                <p className="about-us__coverage-title">Afraid of Airlines? There’s Always the Private Jet</p>
                            </a>
                            <span className="about-us__coverage-source">The New York Times</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://www.usatoday.com/story/money/2020/09/02/dog-adoption-covid-19-creates-a-thriving-business-for-dogs/5680569002/">
                                <p className="about-us__coverage-title">Dog days of the pandemic create a thriving economy for man's best friend</p>
                            </a>
                            <span className="about-us__coverage-source">USA Today</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://money.yahoo.com/coronavirus-puppy-scams-come-with-red-flags-expert-says-illegal-tender-podcast-202126314.html">
                                <p className="about-us__coverage-title">Coronavirus puppy scams come with 'red flags,' expert says: Illegal Tender podcast</p>
                            </a>
                            <span className="about-us__coverage-source">Yahoo Money</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://exclusive.multibriefs.com/content/my-team-outperformed-expectations-amid-wfh-but-were-still-heading-back-to-t/association-management">
                                <p className="about-us__coverage-title">My team outperformed expectations amid WFH — but we’re still heading back to the office eventually</p>
                            </a>
                            <span className="about-us__coverage-source">Multibriefs</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container js-article-container-4 show">
                        <article className="about-us__coverage-article">
                            <a href="http://abcnews.go.com/GMA/video/avoid-scams-adopting-puppy-51700214">
                                <p className="about-us__coverage-title">How to avoid scams when adopting a puppy</p>
                            </a>
                            <span className="about-us__coverage-source">GOOD MORNING AMERICA</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.stltoday.com/opinion/columnists/missouri-legislature-must-reform-animal-welfare-laws/article_fcb10894-b8cb-5b6a-87f6-2cfbf3bf9b77.html">
                                <p className="about-us__coverage-title">Missouri Legislature must reform animal welfare laws</p>
                            </a>
                            <span className="about-us__coverage-source">St. Louis Post-Dispatch</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://thehill.com/opinion/healthcare/351770-private-sector-can-help-cut-down-on-service-animal-fraud/">
                                <p className="about-us__coverage-title">Private sector can help cut down on service animal fraud</p>
                            </a>
                            <span className="about-us__coverage-source">The Hill</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://6abc.com/pets/montco-boy-battling-eye-cancer-meets-his-new-puppy/2252664/">
                                <p className="about-us__coverage-title">Montco boy battling eye cancer meets his new puppy</p>
                            </a>
                            <span className="about-us__coverage-source">ABC Philadelphia</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://abc27.com/2017/07/26/puppy-wish-granted-for-3-year-old-cancer-survivor/">
                                <p className="about-us__coverage-title">Puppy wish granted for 3-year-old cancer survivor</p>
                            </a>
                            <span className="about-us__coverage-source">ABC Harrisburg</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container js-article-container-5 show">
                        <article className="about-us__coverage-article">
                            <a href="http://www.swtimes.com/entertainmentlife/20170706/cherokee-nation-child-welfare-office-adds-therapy-puppy-to-staff">
                                <p className="about-us__coverage-title">Cherokee Nation Child Welfare Office adds therapy puppy to staff</p>
                            </a>
                            <span className="about-us__coverage-source">Times-Record</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.kiiitv.com/news/local/teen-living-with-cystic-fibrosis-gets-puppy-surprise/422918116">
                                <p className="about-us__coverage-title">Teen living with cystic fibrosis gets puppy surprise</p>
                            </a>
                            <span className="about-us__coverage-source">ABC Corpus Christi</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.petproductnews.com/News/PuppySpot-Launches-Free-Health-Clinics-for-Breeders/">
                                <p className="about-us__coverage-title">PuppySpot Launches Free Health Clinics for Breeders</p>
                            </a>
                            <span className="about-us__coverage-source">Pet Product News</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="https://www.inc.com/kevin-daum/puppy-loving-ceo-shares-tips-for-sniffing-out-authenticity-in-business.html">
                                <p className="about-us__coverage-title">Puppy-Loving CEO Shares Tips for Sniffing Out Authenticity in Business</p>
                            </a>
                            <span className="about-us__coverage-source">Inc.</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.vcstar.com/story/opinion/readers/2017/06/15/not-everyone-can-adopt-shelter-dog/398470001">
                                <p className="about-us__coverage-title">Not everyone can adopt shelter dog</p>
                            </a>
                            <span className="about-us__coverage-source">Ventura County Star</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container hidden js-article-container-6">
                        <article className="about-us__coverage-article">
                            <a href="http://www.muskogeephoenix.com/news/pup-to-help-foster-children-integrate-into-homes/article_a4d1b544-52d4-5109-8664-da48a76f15f5.html">
                                <p className="about-us__coverage-title">Pup to help foster children integrate into homes</p>
                            </a>
                            <span className="about-us__coverage-source">Muskogee Phoenix</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.newson6.com/story/35301642/new-therapy-dog-for-cherokee-nation-indian-child-welfare-office">
                                <p className="about-us__coverage-title">New Therapy Dog For Cherokee Nation Indian Child Welfare Office</p>
                            </a>
                            <span className="about-us__coverage-source">CBS Tulsa</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.washingtonexaminer.com/california-leads-from-behind-on-pet-welfare/article/2621721">
                                <p className="about-us__coverage-title">California leads from behind on pet welfare</p>
                            </a>
                            <span className="about-us__coverage-source">Washington Examiner</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://video.foxnews.com/v/5369687843001/?#sp=show-clips">
                                <p className="about-us__coverage-title">After the Show Show: Puppies!</p>
                            </a>
                            <span className="about-us__coverage-source">Fox News</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.foxnews.com/us/2017/03/23/fox-friends-celebrates-national-puppy-day.html">
                                <p className="about-us__coverage-title">'Fox &amp; Friends' celebrates National Puppy Day</p>
                            </a>
                            <span className="about-us__coverage-source">Fox News</span>
                        </article>
                      </div>
                      <div className="about-us__coverage-container js-article-container hidden js-article-container-7">
                        <article className="about-us__coverage-article">
                            <a href="http://www.kulr8.com/story/34987119/new-puppy-brings-joy-to-grieving-billings-family">
                                <p className="about-us__coverage-title">New puppy brings joy to grieving Billings family</p>
                            </a>
                            <span className="about-us__coverage-source">NBC Billings</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.mediapost.com/publications/article/295427/puppyspot-launches-first-ad-campaign.html">
                                <p className="about-us__coverage-title">PuppySpot Launches First Ad Campaign</p>
                            </a>
                            <span className="about-us__coverage-source">MediaPost</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://observer.com/2017/02/secretary-of-agriculture-animal-welfare/">
                                <p className="about-us__coverage-title">Trump's Secretary of Agriculture Pick Needs to Take Action on Animal Welfare</p>
                            </a>
                            <span className="about-us__coverage-source">New York Observer</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="#">
                                <p className="about-us__coverage-title">Best Online Business Ideas: 39 Favorites from the Pros</p>
                            </a>
                            <span className="about-us__coverage-source">Fit Small Business</span>
                        </article>
                        <article className="about-us__coverage-article">
                            <a href="http://www.ksla.com/story/34002740/bossier-city-family-receives-service-dog">
                                <p className="about-us__coverage-title">Bossier City family receives service dog</p>
                            </a>
                            <span className="about-us__coverage-source">CBS Shreveport</span>
                        </article>
                      </div>
                        <p className="about-us__coverage-read-more js-show-next-article hidden hyperlink">Read More</p>
                        <p className="about-us__coverage-read-more js-show-less-article hidden hyperlink">Read Less</p>
                        <p className="about-us__coverage-inquiries">Please direct all press inquiries to <a className="hyperlink" href="mailto:support@puppyspotadoption.shop">support@puppyspotadoption.shop</a></p>
        </section>
    </div>
  );
}

export default AboutUsContainer;
