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

interface ICOFDetail{
    Name: string;
    Joined: string;
    Circle: string;
}

@Component({
    selector: 'app-statement-detail',
    templateUrl: './statement-detail.component.html',
    styleUrls: ['./statement-detail.component.css']
})
export class StatementDetailComponent implements OnInit {
    
    mydata:[]; 
    statementDetail:[IStateDetails];
    CoFDetail:[ICOFDetail];

    
     constructor(private cardSvc: CardService ) {

     }

     async ngOnInit(){
        let response = await this.cardSvc.getReport(2);
        console.log("respnose", response);
        console.log("StatementDetailData" , response.data.StatementDetail);
        this.mydata = response.data.StatementDetail;
        console.log(this.mydata);
        }
    
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