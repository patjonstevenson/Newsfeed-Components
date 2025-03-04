/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  // Add articles to array
  {
    title: "Sanctum Ipsum Pt. 2",
    date: "Sept 4th, 2019",
    firstParagraph: `Padre Pio Lourdes magisterium vicar of Christ St. Francis of Assisi Our Lady of Guadalupe Holy days of obligation Padre Pio eucharist annointing of the sick communion St. Therese of Lisieux. Vicar of Christ Pope St. John Paul II monk St. Thomas Aquinas nun eucharist Fatima St. Joseph St. James salve regina catechesis. Confiteor St. Michael the Archangel defend us in battle cathedral St. Thomas Aquinas Padre Pio holy Mary, Mother of God St. Michael the Archangel defend us in battle Trappist canonization Paschal mystery vatican St. Rose of Lima assumption salve regina eucharist. Communion transubstantiation vicar of Christ relic monastery St. James adoration vatican St. Michael the Archangel defend us in battle universal College of Cardinals Papal enclave St. Joseph ecumenical council. Lourdes confession St. Francis of Assisi saint medal encyclical litany confiteor St. Michael the Archangel defend us in battle relic transubstantiation bless us, oh lord, and these thy gifts Holy days of obligation St. Michael the Archangel defend us in battle St. Michael the Archangel defend us in battle priest.`,
    secondParagraph: `Tradition catechesis abbot Benedictine vatican Our Lady of Guadalupe miter Pope Francis saint catechesis rosary. Universal apostolic succession Nicene creed catholic nun beatified St. Therese of Lisieux consecration saint medal ecumenical council. Nun Kyrie eleison Apostles creed encyclical monsignor St. Gabriel College of Cardinals assumption Cistercian diocese Thomas Merton. Christe eleison tradition Holy days of obligation the sacred heart of Jesus rosary monsignor tradition Pope St. John Paul II St. Gabriel monsignor liturgy of the hours diocese beatified monastery Padre Pio. Salve regina Papal enclave Trappist salve regina adoration salve regina consecration litany College of Cardinals rosary adoration miter.`,
    thirdParagraph: `Monk saint medal Holy days of obligation Paschal mystery eucharist Papal enclave Lourdes diocese deacon Trappist salve regina Nicene creed. Confession St. Gabriel Paschal mystery our Father, who art in Heaven apostolic succession annointing of the sick stations of the cross miter liturgy of the hours magisterium canonization the sacred heart of Jesus St. Francis of Assisi St. Joseph transubstantiation. Apostolic succession litany dogma consecration pontificate St. Therese of Lisieux Thomas Merton relic St. Gabriel confiteor. Apostles creed annointing of the sick cathedral adoration diocese assumption forgive me Father, for I have sinned communion encyclical annunciation St. Therese of Lisieux Benedictine. Litany Christe eleison rosary Christe eleison holy Mary, Mother of God rosary miter Padre Pio universal relic.`
  },
  {
    title: "Sanctum Ipsum Pt. 1",
    date: "Sept 4th, 2019",
    firstParagraph: `Liturgy of the hours triduum nun novena College of Cardinals cathedral opus Dei confession monk College of Cardinals transubstantiation Ash Wednesday College of Cardinals. Pope apostolic succession Our Lady of Guadalupe Lourdes Pope St. John Paul II opus Dei tridentine our Father, who art in Heaven miter St. Thomas Aquinas encyclical immaculate conception cathedral. Stations of the cross beatified Cistercian Pope Francis tradition bless us, oh lord, and these thy gifts annointing of the sick adoration tradition Holy days of obligation intercession monastery St. Michael the Archangel defend us in battle our Father, who art in Heaven. Catechesis vicar of Christ Ursuline transubstantiation Benedictine dogma opus Dei Trappist apostolic succession feast day St. Rose of Lima. `,
    secondParagraph: `Lourdes holy Mary, Mother of God annunciation catechesis tradition novena liturgy of the hours miter Trappist catechesis Apostles creed cathedral monk bless us, oh lord, and these thy gifts. Holy Mary, Mother of God litany priest our Father, who art in Heaven stations of the cross canonization confession deacon priest Kyrie eleison. Pontificate natural law confiteor assumption the sacred heart of Jesus St. James St. Rose of Lima College of Cardinals monsignor nun nun salve regina. Bless us, oh lord, and these thy gifts monastery monk consecration miter St. Francis of Assisi catholic bless us, oh lord, and these thy gifts tradition saint Benedictine.`,
    thirdParagraph: `St. Gabriel monsignor eucharist vicar of Christ catholic magisterium pontificate intercession consecration saint apostolic succession Papal enclave transubstantiation. Monk Our Lady of Guadalupe rosary opus Dei salve regina pope seal of confession adoration novena saint Christe eleison litany relic. Communion feast day St. Gabriel Apostles creed cathedral St. Therese of Lisieux tridentine Apostles creed rosary annunciation catholic. Deacon miter Nicene creed vicar of Christ saint St. Rose of Lima College of Cardinals Paschal mystery magisterium Lourdes.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

// Create component function
function createArticle(props) {
  // Create Elements
  const article = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const articleContent = document.createElement("div");
  const firstParagraph = document.createElement("p");
  const secondParagraph = document.createElement("p");
  const thirdParagraph = document.createElement("p");
  const buttons = document.createElement("div");
  const expandButton = document.createElement("span");
  const closeButton = document.createElement("span");

  // Populate elements with content
  title.textContent = props.title;
  date.textContent = props.date;
  firstParagraph.textContent = props.firstParagraph;
  secondParagraph.textContent = props.secondParagraph;
  thirdParagraph.textContent = props.thirdParagraph;
  expandButton.textContent = "\u25BC";
  closeButton.textContent = "\u25b2";

  // Add classes to elements
  article.classList.add("article");
  date.classList.add("date");
  buttons.classList.add("expandButton");
  closeButton.classList.add("hide-btn");
  articleContent.classList.add("article-content-closed");

  // Add paragraphs to articleContent
  articleContent.appendChild(firstParagraph);
  articleContent.appendChild(secondParagraph);
  articleContent.appendChild(thirdParagraph);

  // Add buttons to buttons
  buttons.appendChild(expandButton);
  buttons.appendChild(closeButton);

  // Add event listener to button
  buttons.addEventListener("click", event => {
    article.classList.toggle("article-open");
    expandButton.classList.toggle("hide-btn");
    closeButton.classList.toggle("hide-btn");
    articleContent.classList.toggle("article-content-open");
    articleContent.classList.toggle("article-content-closed");
  });

  // Append children to article
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(articleContent);
  article.appendChild(buttons);

  return article;
}

// Create components from data
const articles = document.querySelector(".articles");
data.forEach(article => articles.appendChild(createArticle(article)));
