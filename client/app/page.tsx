import Image from "next/image";
import img from "@/public/model.png";
import img2 from "@/public/model2.png";
import wave from "@/public/wave.svg";
import wave2 from "@/public/wave2.svg";
import diamond from "@/public/diamond/1.png";
import DiamondBorder from "@/component/UI/diamondBorder/DiamondBorder";
import DiamondBox from "@/component/diamonBox/DiamondBox";
import QuestionItem from "@/component/questionItem/QusetionItem";

function Main(){   
  return ( 
    <>
      <section className="relative bg-gradient">
          <div className="ml-5 lg:ml-10 lg:w-1/2">
            <h1 className="font-semibold text-2xl sm:text-4xl lg:text-6xl">Diamond Dating</h1>
            <DiamondBorder width="60px" bg="white"/>
            <h3 className="font-light text-lg sm:text-2xl lg:text-3xl leading-5 sm:leading-6 lg:leading-8 mt-2">
              Знакомства с девушками модельной<br />внешности для сопровождения<br /> содержания и пикантных встреч...
            </h3>
            <h4 className="text-lg font-link flex items-center gap-2 sm:gap-5 tracking-widest">
              <span>Модели</span>
              <span>*</span>
              <span>Эскортницы</span>
              <span>*</span>
              <span>Содержанки</span>
            </h4>
          </div>
          <div className="relative flex justify-end z-40 pt-10 lg:pt-0 overflow-hidden">
            <Image className="primary-image z-20 mr-20" src={img}  alt="model"/> 
            <Image  className="main-wave z-30" src={wave} alt="wave" priority={true}/>
            <Image  className="hidden lg:block absolute bottom-0 left-0 z-10" src={wave2} alt="wave2"width={900} />
          </div>
          <div className=" w-full lg:absolute lg:w-2/5 bottom-5 right-5 z-50 main-text">
            <div className="w-5/6 lg:w-full mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-secondary-300">Если вы хотите договорится напрямую с девушкой о встречи, не желая прибегать, 
              к помощи агентсв и менеджеров. То на нашем сайте, вы без проблем подберёте себе спутницу на вечер! </p>
              <h4 className="text-secondary-200 text-lg sm:text-2xl font-header">Знакомства без посредников!!!</h4>
            </div>
          </div>
          <DiamondBox />
      </section>
      <section className="bg-primary py-2 sm:py-5">
        <h3 className="headline">Преимущества</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 px-5">
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-secondary-200 text-lg sm:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">Только реальные фото</h4>
            <DiamondBorder width="90px" bg="#ddc7d1"/>
            <p className="text">
              Все анкеты девушек которые регистрируются на нашем сервисе проходят модерацию 
              на точное соответствие фото</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-secondary-200 text-lg sm:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">Встречи тет-a-тет</h4>
            <DiamondBorder width="90px" bg="#ddc7d1"/>
            <p className="text">
              Мы предоставляем реальные контакты девушек которые смогут встретится 
              с вами и которые будут договариватся лично</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-secondary-200 text-lg sm:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">Девушки топ модели</h4>
            <DiamondBorder width="90px" bg="#ddc7d1"/>
            <p className="text">
              Мы предлагаем различные бонусы девушкам которые регистрируются на нашем сайте, 
              и размещаем огромное количество рекламы в социальных сетях благодоря чему можем 
              подобрать самых ярких представительниц женского пола со схожеми интересами к эскорту
            </p>
          </div>
        </div>
      </section>
      <section className="block lg:flex bg-primary p-5 md:p-10 lg:p-20">
        <div className="flex flex-col items-center relative w-full lg:w-1/2">
          <div className="relative z-20">
            <Image src={img2} alt="model" width={480} />
            <div className="absolute diamond-shadow-second z-20"></div>
          </div>
          <div className="relative right-10 bottom-24 sm:bottom-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 z-30">
            <Image 
              className="absolute top-0 left-0 z-20" 
              src={diamond} 
              alt="diamond" 
              sizes="100%" 
              quality={75} 
            fill/>
            <div className="absolute top-0 left-0 w-full h-full diamond-shadow z-10"></div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="pb-5">
            <h3 className="headline">Как пользоваться сайтом?</h3>
            <p className="text-secondary-200 text-lg sm:text-2xl mb-1 sm:mb-2">
              На самом деле всё очень просто, вам нужно выполнить всего 3 шага, для того чтобы найти себе девушку на вечер<br />
              1. Оплатить получение контакта девушки на странице модели<br />
              2. После чего вы автоматически добавляетесь в её избранное, а контакты девушки будут отображатся в ваших заказах<br />
              3. Написать девушки любым удобным способом и договорится о встрече!<br />
            </p>
          </div>
      
          <h3 className="headline">Основные вопросы</h3>
          <QuestionItem 
            title="Если я оплатил, а девушка не отвечает?"
            text="В таком случаи вы пишите ей через наш сервис, 
            после чего у неё появится таймер на 6 часов в которые она должна Вам ответить. 
            Если этого не произошло тогда мы будем вынуждены вернуть вам деньги на карту, 
            а анкета девушки будет заблокирована на несколько дней."
          />
          <QuestionItem 
            title="Какие гарантии что девушка приедет?"
            text="Мы не можем гарантировать, что девушка приедет на встречу с вами, 
            наш сервис предоставляет только контакты девушек, и может гарантировать только то, 
            что девушка ответит вам в течении 6 часов, если этого не произошло, то мы вернём вам деньги на карту."
          /> 
          <QuestionItem 
            title="Если девушка будет не соответствовать фото?" 
            text="Вы сможете написать нам в течении 24 часов, после чего мы проверим анкету девушки, 
            и если она не соответствует фото, вернём вам деньги на карту." 
          />
          <QuestionItem 
            title="Почему я не могу написать девушке?" 
            text="Вы можете написать только тем моделям которые добавили Вас в избранное, 
            после того как вы получили контакт девушки. Вам будут доступны все способы связи с ней. И все функциинашего сайта."
          />
        </div>
      </section>
      <footer className="bg-primary text-secondary-200 text-center py-5">
        <p className="text-sm sm:text-lg">© 2021 Diamond Datind. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Main;