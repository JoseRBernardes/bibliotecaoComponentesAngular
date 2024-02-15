import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { ICalendary } from './Interfaces/ICalendary';

@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrl: './calendary.component.css'
})
export class CalendaryComponent implements OnInit {

  
  visible:string = 'hidden'
  timeTable:string[]=
  ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']

   month:Date[]=[]
   calendary:ICalendary[]= []
   monthSet!:Date; 

   //Abrir e fechar formulario com horario
   openCloseTimeTable():void{

      this.visible = this.visible === 'visible' ? 'hidden' : 'visible'

   }

   //Verificar se Data passa como parametro é referente ao dia Hoje
   isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  convertDateStringMonthYear(data:Date):string{
    
      // Obter o nome do mês
      var nomeDoMes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(data);

      // Obter o ano
      var ano = data.getFullYear();

      // Exibir o resultado
      let convertedDate = (`${nomeDoMes} ${ano}`);
      return convertedDate
  }

  changeMonth(next:boolean):void{
    if(next){
      this.monthSet.setMonth(this.monthSet.getMonth() + 1)
    }else{
      this.monthSet.setMonth(this.monthSet.getMonth() - 1)
    }

    this.LoadingMonth(this.monthSet)
  }

   LoadingMonth(month?:Date):void{
    this.month=[]
    this.calendary= []
        let currentMonth
        
        if(month == undefined){
        //Obtendo mês atual
         currentMonth = new Date();
         this.monthSet = new Date();
        }else{
          currentMonth = new Date(month);
          this.monthSet = new Date(month);
        }
        //Setndo dentra da variavel o primeiro dia do mês atual
        currentMonth.setDate(1);
        
        //Separando o primeiro dia do mês
        let firstDay = new Date(currentMonth);

        //Preparando a varivel com o ultimo para recebero valor
        let lastDay = new Date(currentMonth);
        
        //Adicionando um mês a data com o primeiro dia do mês atual
        lastDay.setMonth(lastDay.getMonth()+1);

        //Removendo um dia da variavel e assim obtendo o ultimo dia do mês
        lastDay.setDate(lastDay.getDate()-1)

        //Configurando parametro para popular o vetor mês
        let paramDate = new Date(firstDay);

        //Populando o array mês
        while(paramDate <= lastDay){
              this.month.push(new Date(paramDate));
              paramDate.setDate(paramDate.getDate() + 1);
          }
        
        //Declarando o contador de dias
        let countDay = 0;
        
        //Populando o objeto calendario
        for(let i=0; i < 42; i++){
            
            //Configuração do dia da Semana para o cabecalho
            let dayWeek 
            if(i > 6){
              dayWeek = i % 7;
            }else{
              dayWeek = i;
            } 
            
            //verificando se o dia da semana configurado condiz como dia da semana obitido
            //no array mês 
            if(countDay < this.month.length && this.month[countDay].getDay() === dayWeek){
                this.calendary.push({Date:new Date(this.month[countDay]),FlAtivo:true});
                countDay++;
            }else{
                this.calendary.push({Date:new Date('00-00-0000'),FlAtivo:false});
            }
            
        }
    }



   ngOnInit(): void {
     this.LoadingMonth()
   }
}
