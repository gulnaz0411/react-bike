
 
 
 function Theftreport () {
  return (
  
    <div className="container pt-4 pb-4">
       <form action="#" className="mb-4" id="add-form">
        <div className="mb-3">
          <input className="form-control" type="text" id="license_inp" placeholder="Номер лицензии"/>

        </div>
        <div className="mb-3">
          <input className="form-control" type="text" id="surname-inp" placeholder="Фамилия"/>

        </div>
        <div className="mb-3">
          <input className="form-control" type="text" id="name-inp" placeholder="Имя"/>

        </div>
        <div className="mb-3">
          <input className="form-control" type="text" id="lastname-inp" placeholder="Отчество"/>

        </div>
      
      
        <div className="mb-3">
          <input className="form-control" type="text" id="bike_type-inp" placeholder="Тип велосипеда"/>
         

        </div>
        <div className="mb-3">
          <input className="form-control" type="text" id="color-inp" placeholder="Цвет"/>

        </div>
        <div className="mb-3">
          <input className="form-control" type="date" id="eventtime-inp"/>
          
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" id="additional_info" placeholder="Дополнительная информация"/>
         
      
          
        </div>
    
    
        <button type="submit" className="btn btn-primary">Добавить</button>
      
      
      </form>
      <table className="table table-striped">
      <thead>
          <tr>
            <th>Номер лицензии</th>
            <th>ФИО</th>
            <th>Тип велосипеда</th>
            <th>Цвет</th>
            <th>Дата</th>
          </tr>
        </thead>
      </table>
    </div>
   
  
  
  );
};

export default Theftreport;
  




