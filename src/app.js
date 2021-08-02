import { showAlert } from './messages';
//importamos css
import './styles.css';
//importamos jquery
import $ from 'jquery';
document.getElementById("btn-alert")
    .addEventListener('click', showAlert)

$("#btn-jquery").click( function () {
    alert("Btn jquery");
}) 