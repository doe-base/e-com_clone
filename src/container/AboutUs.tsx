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

                <div className="about-us__leadership-card">
                    <img className="about-us__leadership-image" src="https://cdn.buttercms.com/4ltrLURWSjigswOc9vkf"/>
                    <div className="about-us__leadership-content">
                    <h4>Claire Komorowski</h4>
                    <h5>CEO, aka Chief Puppy Officer</h5>
                    <p></p><p style={{padding: '1.2rem 0'}}>I’m a mom of three adorable kids, one snuggly Bernedoodle named Casey (courtesy of PuppySpot), and am married to a great guy. I grew up in Michigan (go Blue!) and our family always desired to have puppies…but I was allergic. My family waited until I left for college to bring “Bart the Wonder Dog (Welsh Corgi)” home. He immediately stole our hearts. My professional path has focused on leading teams or companies in service first industries, with my most recent pre-PuppySpot job running Sales Strategy &amp; Operations for HomeAdvisor (now known as Angi). I joined the PuppySpot team as head of Revenue Operations in 2019 because I believe puppies positively impact peoples’ lives. Casey joined our family in 2020, by then I knew there was no better place to find our perfect puppy. I was promoted to CEO in 2021, a role I am thrilled to play. My family and I now live happily in central New Jersey.</p><p></p>
                    </div>
                </div>

                <div className="about-us__leadership-card">
                    <img className="about-us__leadership-image" src="https://cdn.buttercms.com/V0tBVtXJSqGf9bGt6LKo"/>
                    <div className="about-us__leadership-content">
                    <h4>Jeff Coughlin</h4>
                    <h5>Vice President, Finance &amp; Strategic Analytics aka Dr. Data</h5>
                    <p></p><p style={{padding: '1.2rem 0'}}>I am relatively new to the PuppySpot team, having served as Director of Analytics for Digital Fuel Capital and before that as Senior Data Scientist at Care.com and an Economic Analyst at the Economic Development Research Group. As you can no doubt infer, data is my thing. But so is playing with my kids, and sneaking in a long run here and there. Our family members include two guinea pigs, Charlotte and Poppy. The kids are pressing hard for a puppy, which means we’re going to become a PuppySpot customer very soon.&nbsp;</p><p></p>
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
            <div className="about-us__coverage-container js-article-container hidden js-article-container-1">
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
            <div className="about-us__coverage-container js-article-container hidden js-article-container-2">
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
            <div className="about-us__coverage-container js-article-container hidden js-article-container-3">
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
            <div className="about-us__coverage-container js-article-container hidden js-article-container-4">
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
            <div className="about-us__coverage-container js-article-container hidden js-article-container-5">
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
            <p className="about-us__coverage-read-more js-show-next-article hyperlink">Read More</p>
            <p className="about-us__coverage-read-more js-show-less-article hidden hyperlink">Read Less</p>
            <p className="about-us__coverage-inquiries">Please direct all press inquiries to <a className="hyperlink" href="mailto:support@puppyspotadoption.shop">support@puppyspotadoption.shop</a></p>
        </section>
    </div>
  );
}

export default AboutUsContainer;
