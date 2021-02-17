import {Component, OnInit} from '@angular/core';
import {CardService} from "../services/card.service";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

interface ICard {
    Name: string;
    ScanCodeURLAddress: string;
    Mobile: string;
    Email: string;
    Filename: string;
}

@Component({
    selector: 'app-bussiness-card',
    templateUrl: './bussiness-card.component.html',
    styleUrls: ['./bussiness-card.component.css']
})
export class BussinessCardComponent implements OnInit {

    constructor(private cardSvc: CardService) {
    }

    title: string = 'qr-card';
    elementType: string = 'url';
    card: ICard;

    async ngOnInit() {
        try {
            const {data} = await this.cardSvc.getCard();
            this.card = data;
        } catch (error) {
            console.log(error);
        }
    }

    downloadAsPDF() {
        let data = document.getElementById('pdfTable');
        html2canvas(data).then(canvas => {
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
            // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
            pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
            pdf.save(this.card.Filename);
        });
    }


}
