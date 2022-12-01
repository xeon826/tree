<!DOCTYPE html>
<html lang="en">

<head>


  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131179160-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-131179160-1');
  </script>
  <meta charset="UTF-8" name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="shortcut icon" type="image/png" href="img/favicon.png" />
  <title>The Joshua Tree</title>
  <!-- <link href="css/globalmidnight.css" rel="stylesheet"> -->
  <link href="css/hamburgers.min.css" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,500' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
  <link href="css/style_.css?v=3" rel="stylesheet">



</head>

<body>


  <header>
    <button class="hamburger hamburger--collapse" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="navigation">
      <ul class="navigation-container">
        <li><a class="navigation__link" href="#top">Home</a></li>
        <li><a class="navigation__link" href="#about">About</a></li>
        <li><a class="navigation__link" href="#services">Services</a></li>
        <li class="logo"><a class="navigation__link logo__anchor" href="#"><img src="img/tree--white-blue-logo.png"></a></li>
        <li><a class="navigation__link" href="#works">Works</a></li>
        <li><a class="navigation__link" href="#skills">Skills</a></li>
        <li><a class="navigation__link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>
  <!-- <div id="particles-js" class="has-particles tree-container tree-container--mobile centered-relative"> -->
  <div id="particles-js" class="tree-container tree-container--mobile centered-relative">
    <img class="banner" src="img/tree-m.png">
    <h1>Creative web design to grow your business</h1>
    <?php
    $boxes = [
      ['red', 'Front End Coder', 'The philosophy is simple. I place the concerns of your clients at the center of the user experience.'],
      ['blue', 'Data Analysis', 'When it comes to data analysis, visualization is key. I can create graphical representations of data showing correlations and trends.'],
      ['green', 'Designer', 'With my skills in Javascript, Vue, and React I can create a web application that looks good on all screen sizes.'],
      ['light-blue', 'Back End Coder', 'With my vast experience in back-end coding technologies such as Python, PHP, Postgres and MySQL, I can deliver a product that is unsurpassed.'],
    ];
    foreach ($boxes as $box) {
        ?>
        <div class="box draw box--<?=$box[0]?>">
          <h3>+ <?=$box[1]?></h3>
          <p class=""><?=$box[2]?></p>
        </div>
        <?php
    }
    ?>
  </div>
  <section id="about" class="about section">
    <h2 class="section__header">Web+Design+Development</h2>
    <p class="section__paragraph">
      Since 2009, I've worked as part of teams and as a freelancer, developing websites and applications.
    </p>
    <p class="section__paragraph">
      Within a relatively short amount of time, I established a reputation for delivering uniquely styled UI's with
      well-planned user experience design. I'm a programmer/web-designer who specializes in developing customized
      websites that are both functional
      and highly presentable.
    </p>
    <p class="section__paragraph">
      Much like the Joshua Tree, I'm optimistic that I can help your business grow and take root.
    </p>
    <div class="section__quote"
      data-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('/img/tree-one.jpg')"
      data-srcset-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/tree-one-712x401.jpg')">
      <div class="quote">
        Recognizing the need is the primary condition for design</br>
        <small>Charles Eames</small>
      </div>
    </div>
  </section>
  <section id="services" class="services section">
    <h2 class="section__header">Services / What I do</h2>
    <p class="section__paragraph">
      I provide the following services - web design, front-end web development, back-end system development and
      integration, mobile application development and data analysis.
    </p>
    <img class="foliage" src="img/tree-background.png">
    <span class="services-container">
      <div class="box box--front-end box--red services-container__box ">
        <div>
          <h5>header</h5>
          <h5>div</h5>
          <h5>article</h5>
        </div>
        <h3>Front End Coder</h3>
        <p>
          Websites are nowadays viewed on multiple devices. With my skills in front-end web technologies such as HTML,
          CSS, Javascript, Vue, and React, I can create a flexible, responsive site that looks good on all screen sizes.
        </p>
      </div>
      <div class="box box--design box--green services-container__box ">
        <div></div>
        <img src="img/paint-brush.png">
        <h3>Design</h3>
        <p>
          My design philosophy is simple. I always place my client’s customers at the heart of the user experience -
          resulting in well-designed, user-friendly websites that meet the client’s objectives.
        </p>
      </div>
      <div class="box box--seo box--blue services-container__box ">
        <div></div>
        <div></div>
        <h3>Data Analaysis</h3>
        <p>
          Data analysis plays an essential role in understanding trends and correlations. I can create efficient and readable graphical representations of API data using tools such as Pandas and Matplotlib.
        </p>
      </div>
      <div class="box box--back-end box--light-blue services-container__box ">
        <div>
          <div class="screen">
            <p class="code">
              &lt;?php
              use Symfony/core/bundle/payum;
              use DirectoryPlatform/AppBundle/Entity/Order.php;
              if ($t == 0) {
              $listing = new Listing();
              $listing.setName('listing_name');
              $listing.setUser($this->getUser());
              } else {
              $em = $this->getDoctrine();
              $em->persist($form->getData());
              $em->flush();
              return redirect('listing_my');
              }
              function setViews(Request $request, Listing $listing) {
              $listing->setViews(++$listing->getViews());
              $em = $this->getDoctrine('listing');
              $em->persist($listing);
              $em->flush();
              }
            </p>
          </div>
        </div>
        <h3>Back End Coder</h3>
        <p>
          I have vast experience in back-end web technologies such as Python, PHP, Postgres, and MySQL to create
          multi-functional web portals - from content management systems to full-fledged e-commerce solutions, and
          beyond.
        </p>
      </div>
    </span>
    <div class="section__quote"
      data-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/planted_tree.jpg')"
      data-srcset-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/planted_tree-600x356.jpg')">
      <div class="quote">
        If you do it right, it will last forever.</br>
        <small>George Nelson</small>
      </div>
    </div>
  </section>
  <section id="works" class="works section">
    <h2 class="section__header">Works / What I've done</h2>
    <p class="section__paragraph">
      I've completed several works over the years. The following is by no means a comprehensive list but are what I've
      chosen to show case the various clients I've had over the years.
    </p>
    <span class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 lg:tw-gap-4 works-container">
      <?php
      $works = [
        ['delt.jpg', 'DELT is a software development company startup that creates web applications using a variety of different technologies like Django and Laravel. My duties consisted of full-stack development, here I learned about the utility of single-page-applications, proper SEO, core OOP principals, and methodologies for organized and DRY code.', 'https://www.delt.net/'],
        ['monarch.jpg', 'Monarch is an architecture firm that delivers high-quality blueprints for building designs and renovations. Building this website, I learned about page speed optimization, extending code functionality of frameworks, and web scraping.', 'https://monarcharchitecture.com/'],
        ['land_market.jpg', 'The Land Market is an application that serves as a means for owners, buyers, and agents to market property listings. Working on this application I learned about Google API\'s, MVC architecture, database ORM\'s, and data analysis.', 'https://www.thelandmarket.com/'],
        ['one_main_financial.jpg', 'OneMain Financial is a personal loan lender that operates branches in 44 states around the country and makes loans available to applicants with bad credit. Here I learned about the importance of the three "ilities" - maintainability, readability, and scalability.', 'https://www.onemainfinancial.com/'],
        ['swamp_restaurant.jpg', 'Swamp Restaurant is a staple of the community in Gainesville Florida that serves as a food, bar, and event venue. From this application I learned about creating administrative interfaces for software used for management of user data.', 'https://swamprestaurant.com/'],
        ['unique_pool_management.jpg', 'Unique Pool Management is a pool servicing contractor that specializes in installation and maintenance of both residential and commercial pools. I created an internal employee management application here and in doing so learned about optimization, DRY principals, minimalism, and efficiency.', 'https://uniquepoolmanagement.com/'],
      ];
    foreach ($works as $work) {
        ?>
      <!-- <div class="tw-bg-cover tw-relative tw-w-full tw-overflow-hidden md:tw-h-24 lg:tw-h-96 works"> -->
      <a target='_blank' href='<?=$work[2]?>' class="tw-bg-cover tw-relative tw-w-full tw-overflow-hidden works tw-py-6 md:tw-py-12 lg:tw-py-24">
        <img
          class='hover:tw-filter hover:tw-blur-md tw-transition-all tw-duration-500 tw-w-full tw-absolute tw-left-0 tw-top-0'
          src="img/portfolio/<?=$work[0]?>">
        <div class="tw-h-full tw-pointer-events-none">
          <div
            class="section__paragraph tw-bg-stone-900/75 tw-border-solid tw-border-2 tw-border-white tw-p-3 tw-relative tw-w-full tw-w-5/6 work-description">
              <?=$work[1]?>
            </div>
        </div>
      </a>
      <?php
    }
    ?>
    </span>
    <div class="section__quote"
      data-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/tree_third.jpg')"
      data-srcset-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/tree_third-600x400.jpg')">
      <div class="quote">
        You've got to start with the customer experience and work backwards to the technology.</br>
        <small>Steve Jobs</small>
      </div>
    </div>
  </section>
  <section id="skills" class="skills section">
    <h2 class="section__header">Skills</h2>
    <?php
    $skills = [
    ['Python/Django/Pandas', '92'],
    ['Java/Spring', '60'],
    ['Ruby on Rails', '55'],
    ['Javascript', '90'],
    ['PHP/Symfony/Laravel', '85'],
    ['Postgres', '80'],
    ['SQL', '88'],
    ['React', '85'],
    ];
    foreach ($skills as $skill) {
        ?>
      <h3><?=$skill[0]?></h3>
      <div class="skill-bar" data-percent="<?=$skill[1]?>%">
        <div class="skill">50%</div>
      </div>
      <?php
    }
    ?>
    <div class="section__quote"
      data-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/tree_second.jpg')"
      data-srcset-background="linear-gradient( rgba(0, 0, 250, 0.25), rgba(0, 0, 0, 0.45)), url('../img/tree_second-600x400.jpg')">
      <div class="quote">
        The alternative to good design is always bad design. There is no such thing as no design.</br>
        <small>Adam Judge</small>
      </div>
    </div>
  </section>
  <section id="contact" class="contact section">
    <h2 class="section__header">Contact / I'd love to hear from you</h2>
    <h4 class="">
      Location
    </h4>
    <p class="section__paragraph">Saint Louis, MO</p>
    <hr class='tw-mb-4' />
    <h4 class="">
      Email
    </h4>
    <p class="section__paragraph">admin@thejoshuatree.io</p>
    <hr class='tw-mb-4'/>
    <h4 class="">
      Phone
    </h4>
    <p class="section__paragraph">(636) 206-3577</p>
    <hr class='tw-mb-4'/>
    <div class="map-container">
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-90.52047729492189%2C38.591918812566426%2C-90.13801574707033%2C38.7594378103966&amp;layer=mapnik&amp;marker=38.635861332951186%2C-90.3892465209961"
        style="border: 1px solid black"></iframe><br /><small><a
          href="https://www.openstreetmap.org/?mlat=38.6759&amp;mlon=-90.3292#map=12/38.5757/-90.2292">View Larger
          Map</a></small>
    </div>
  </section>
  <footer>
    <script src="js/jquery.min.js"></script>
    <script src="js/imagesloaded.min.js"></script>
    <script src="js/particles.js"></script>
    <script src="js/main.js?v=2"></script>
  </footer>
</body>

</html>
