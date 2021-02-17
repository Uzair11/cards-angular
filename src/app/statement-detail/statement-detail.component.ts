import {Component, OnInit} from '@angular/core';
import {jsPDF} from 'jspdf';
import {CardService} from '../services/card.service';
import html2canvas from 'html2canvas';

interface IQueryParams {
    token: string;
    statement: number;
    apiUrl: string;
}

interface IStateDetails {
    Date: string;
    Description: string;
    Points: string;
    PointsBal: string;
    TransAmount: number;
    CashBal: string;
}

@Component({
    selector: 'app-statement-detail',
    templateUrl: './statement-detail.component.html',
    styleUrls: ['./statement-detail.component.css']
})
export class StatementDetailComponent implements OnInit {
    statementDetail = [
        {
            Date: "16-Jun-2021", Description: "Credit Card Payment R’cvd", Points: "-", PointsBal: "-",
            TransAmount: 79.00, CashBal: "$79.00"
        },
        {
            Date: "16-Jun-2021", Description: "Weekly Membership", Points: "-", PointsBal: "-", TransAmount: -19.75,
            CashBal: "$59.25"
        },
        {
            Date: "22-Jun-2021", Description: "Loyalty Reward Cash Bonus", Points: "-", PointsBal: "-",
            TransAmount: 11.85, CashBal: "$71.10"
        }]

     
         
     constructor(private cardSvc: CardService) {

     }

     async ngOnInit(){
                  let response = await this.cardSvc.getReport(2);
                  console.log(response);
                }
    

    //     export class reports implements OnInit {

    //         constructor(private cardSvc: CardService) {
    //         }
        
    //         title: string = 'qr-card';
    //         elementType: string = 'url';
    //         card: ICard;
        
    //         async 
    
    
    //     2nd attemt    ngOnInit() {
    //             try {
    //                 const {data} = await this.cardSvc.getReport();
    //                 this.card = data;
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    
    //     constructor(private cardSvc: CardService ) {
    
    //     }
    //     link:IQueryParams.apiUrl;
    //     id:IQueryParams.statement;

    // async ngOnInit(): void {
    //     try {
    //         const {data} = await this.cardSvc.getReport(id);
    //         this.link = data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }






    downloadAsPDF() {
        let data = document.getElementById('pdfData');
        html2canvas(data).then(canvas => {
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
            // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
            let imgHeight = canvas.height * 50 / canvas.width;
            pdf.addImage(contentDataURL, 'PNG', 0, 0, 30, imgHeight);
            pdf.save('test.pdf');

        });
    }

}


//    3rd attamept 
// export class GetReportSW implements OnInit {

//     constructor(private cardSvc: CardService) {
//     }

//     async ngOnInit() {
//         try {
//             const {data} = await this.cardSvc.getReport(2);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }