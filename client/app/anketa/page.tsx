"use client"
import {FormEvent, useState, useRef} from "react";
import { useDispatch } from "react-redux";
import {show} from "@/store/features/alertsSlice";
import DiamondBorder from "@/component/UI/diamondBorder/DiamondBorder";
import { TypeFigures, TypeHair } from "@/config/params";
import AlertModal from "@/component/Modal/AlertModal";
import DefaultButton from "@/component/UI/defaultButton/defaultButton";

function Anketa() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [tell, setTell] = useState("");
	const [age, setAge] = useState("");
	const submitRef = useRef<HTMLButtonElement>(null);

	const send = (e:FormEvent) => {
		e.preventDefault();
		submitRef.current?.setAttribute("disabled", "disabled");
		submitRef.current?.classList.add("opacity-50");
		submitRef.current?.classList.add("corsor-wait");

		const data = {
			'name': name,
			'tell': tell,
			'age': age,
		}

		fetch(`${process.env.serverUrl}/send/anketa`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then((res) => {	
			if (res.status === 200) {
				dispatch(show({text: "Ваша анкета успешно отправленна, в ближайшее время мы свяжемся с вами!", language: 'ru'}));
			}else{
				dispatch(show({text: "При отправке анкеты произошла ошибка, попробуйте позже!", language: 'ru'}));
			}
		})
		.catch(err => {
			console.log(err);
		}).finally(() => {
			setName('');
			setAge('');
			setTell('');
		})
	}

  return ( 
    <div className="relative bottom-12 sm:bottom-0 p-2 sm:p-5 md:p-10">

      <div className="flex flex-col items-center">
        <h2 className="text-center text-primary text-2xl sm:text-4xl font-semibold">Заполните анкету</h2>
        <DiamondBorder width="90px" bg="#ddc7d1"/>
        <h4 className="text-center text-primary text-xl sm:text-2xl mb-5">Мы всегда рады новым моделям</h4>
      </div>

      <form
			onSubmit={(e) => {send(e)}}
			action="/order" method="post" encType="multipart/form-data">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-secondary-300 text-lg sm:text-xl font-link pb-0 md:pb-5">

      <div className="anketa-box">

        <div className="anketa-container">
          <div className="flex justify-between w-full">
            <label htmlFor="order-name">Имя</label>
            <input
							onChange={(e) => {setName(e.currentTarget.value)}} 
							type="text" 
							name="name" 
							className="input" 
							maxLength={255} 
						required/>
          </div>
          <div className="help-block"></div>
        </div>    
  
        <div className="anketa-container">
          <div className="flex justify-between w-full">
            <label htmlFor="order-tell">Телефон</label>
            <input
							onChange={(e) => {setTell(e.currentTarget.value)}} 
							type="text" 
							name="tell" 
							className="input" 
							maxLength={255} 
						required/>
          </div>
          <div className="help-block"></div>        
        </div>    

        <div className="anketa-container">
          <div className="flex justify-between w-full">
            <label className="control-label" htmlFor="order-age">Возраст</label>
            <input
							onChange={(e) => {setAge(e.currentTarget.value)}} 
							type="text" 
							id="order-age" 
							className="input" 
							name="age"
						required/>
          </div> 
          <div className="help-block"></div>       
        </div>    

        <div className="anketa-container">
          <div className="flex justify-between w-full">
            <label htmlFor="order-height">Рост</label>
            <input type="number" id="order-height" className="input" name="height" />
          </div>   
          <div className="help-block"></div>     
        </div>    

        <div className="anketa-container">
          <div className="flex justify-between w-full">
            <label className="control-label" htmlFor="order-weight">Вес</label>
            <input type="number" id="order-weight" className="input" name="weight" />
          </div>  
          <div className="help-block"></div>      
        </div>    

        <div className="anketa-container">
          <div className="flex justify-between w-full">
            <label className="control-label" htmlFor="order-bust">Бюст</label>
            <input type="number" id="order-bust" className="input" name="bust" />
          </div>  
          <div className="help-block"></div>      
        </div> 
      </div>   
    
			<div className="anketa-box">

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-waist">Талия</label>
						<input type="number" id="order-waist" className="input" name="waist" />
					</div>
					<div className="help-block"></div>        
				</div>    
					
				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-hips">Бёдра</label>
						<input type="nember" id="order-hips" className="input" name="hips" />
					</div>
					<div className="help-block"></div>        
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-city_id">Город</label>
						<select id="order-city_id" className="input" name="city_id">
								<option value="">-Выбрать-</option>
								<option value="1">Москва</option>
								<option value="2">Санкт-Петербург</option>
								<option value="3">Новосибирск</option>
								<option value="4">Мурманск</option>
								<option value="5">Архангельск</option>
								<option value="6">Калининград</option>
								<option value="7">Воронеж</option>
								<option value="8">Белгород</option>
								<option value="9">Екатеринбург</option>
								<option value="10">Челябинск</option>
								<option value="11">Пермь</option>
								<option value="12">Казань</option>
								<option value="13">Уфа</option>
								<option value="14">Самара</option>
								<option value="15">Саратов</option>
								<option value="16">Нижний-Новгород</option>
								<option value="17">Омск</option>
								<option value="18">Красноярск</option>
								<option value="19">Иркутск</option>
								<option value="20">Томск</option>
								<option value="21">Кемерово</option>
								<option value="22">Хабаровск</option>
								<option value="23">Владивосток</option>
								<option value="24">Петропаловс-Камчатский</option>
								<option value="25">Ростов-на-Дону</option>
								<option value="26">Краснодар</option>
								<option value="27">Сочи</option>
								<option value="28">Геленджик</option>
								<option value="29">Ставрополь</option>
								<option value="30">Пятигорск</option>
								<option value="31">Кисловодск</option>
								<option value="32">Волгоград</option>
						</select>
					</div>
					<div className="help-block"></div>        
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-hair_color_id">Цвет волос</label>
						<select id="order-hair_color_id" className="input" name="hair_color_id">
							<option value="">-Выбрать-</option>
							{TypeHair.map(item => 
								<option key={item.id} value={item.id}>{item.value}</option>
							)}
						</select>
					</div>
					<div className="help-block"></div>        
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-type_figure_id">Тип фигуры</label>
						<select id="order-type_figure_id" className="input" name="type_figure_id">
							<option value="">-Выбрать-</option>
							{TypeFigures.map(item => 
								<option key={item.id} value={item.id}>{item.value}</option>
							)}
						</select>
					</div>
					<div className="help-block"></div>        
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-bust_size_id">Размер груди</label>
						<select id="order-bust_size_id" className="input" name="Order[bust_size_id]">
							<option value="">-Выбрать-</option>
							<option value="1">0(AA)</option>
							<option value="2">1(A)</option>
							<option value="3">2(B)</option>
							<option value="4">3(C)</option>
							<option value="5">4(D)</option>
							<option value="6">5(E)</option>
							<option value="7">6(F)</option>
						</select>
					</div>
					<div className="help-block"></div>        
				</div>    
			</div>
			
			<div className="anketa-box">
				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-imagefile1">Image File1</label>
						<input type="file" id="order-imagefile1" name="imageFile1" />
					</div>
					<div className="help-block"></div>
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-imagefile2">Image File2</label>
						<input type="file" id="order-imagefile2" name="imageFile2"/>
					</div>
					<div className="help-block"></div>        
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-imagefile3">Image File3</label>
						<input type="file" id="order-imagefile3" name="imageFile3"/>
					</div>
					<div className="help-block"></div>        
				</div>    
			</div>

			<div className="anketa-box">
				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-imagefile4">Image File4</label>
						<input type="file" id="order-imagefile4" name="imageFile4"/>
					</div>
					<div className="help-block"></div>
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-imagefile5">Image File5</label>
						<input type="file" id="order-imagefile5" name="imageFile5"/>
					</div> 
					<div className="help-block"></div>       
				</div>    

				<div className="anketa-container">
					<div className="flex justify-between w-full">
						<label className="control-label" htmlFor="order-imagefile6">Image File6</label>
						<input type="file" id="order-imagefile6" name="imageFile6"/>
					</div> 
					<div className="help-block"></div>       
				</div>    
			</div>

			<div className="w-full">
				<DefaultButton 
					ref={submitRef}
					type="submit" 
					className="bg-secondary-200 text-primary text-lg font-semibold p-2 rounded-md w-1/2" 
					text="Отправить" 
				/>
			</div>
  	</div>
  	</form>
		<AlertModal />
  </div>
  );
}

export default Anketa;