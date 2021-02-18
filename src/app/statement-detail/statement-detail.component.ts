import {Component, OnInit} from '@angular/core';
import {jsPDF} from 'jspdf';
import {CardService} from '../services/card.service';
import html2canvas from 'html2canvas';
import {ActivatedRoute} from '@angular/router';

interface IStateDetails {
    Date: string;
    Description: string;
    Points: string;
    PointsBal: string;
    TransAmount: number;
    CashBal: string;
}

interface ICOFDetail {
    Name: string;
    Joined: string;
    Circle: string;
}

interface IResponse {
    "Filename": "string",
    "Name": "string",
    "DateRange": "string",
    "CircleCount1": "string",
    "CircleCount2_12": "string",
    "CoFDetail": [ICOFDetail],
    "StatementDetail": [IStateDetails]
}

@Component({
    selector: 'app-statement-detail',
    templateUrl: './statement-detail.component.html',
    styleUrls: ['./statement-detail.component.css']
})
export class StatementDetailComponent implements OnInit {

    data: IResponse;

    constructor(private cardSvc: CardService, private route: ActivatedRoute) {

    }

    async ngOnInit() {
        try {
            const {statement, token,apiUrl} = this.route.snapshot.queryParams;
            const {data} = await this.cardSvc.getReport(parseInt(statement), token,apiUrl);
            this.data = data;
        } catch (error) {
            console.log(error);
        }
    }

    downloadAsPDF() {
        let data = document.getElementById('pdfData');
        html2canvas(data).then(canvas => {
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
            // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
            let imgHeight = canvas.height * 50 / canvas.width;
            pdf.addImage(contentDataURL, 'PNG', 0, 0, 30, imgHeight);
            pdf.save(this.data.Filename);

        });
    }

}