package com.anepc.tfc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HomeController {

    @GetMapping("/login")
    public String loginPage(Model model){
        return "login";
    }
    @GetMapping("/criar_cto")
    public String criarCtoPage(Model model){
        return "ctoForm";
    }
    @GetMapping("/ctos")
    public String ctosPage(Model model){
        return "ctos";
    }
    @GetMapping("/estatisticas")
    public String statisticsPage(Model model){
        return "statistics";
    }



    // TEST
    @GetMapping("/TEST")
    public String tests2(Model model){
        return "Tests";
    }

    // EXAMPLE
    @GetMapping("/xmpls")
    public String getXmpl(Model model){

        model.addAttribute("message", "Spring Boot");

        ArrayList ships = new ArrayList<String>();
        ships.add("Adjudicator");
        ships.add("Avenger");
        ships.add("Bellicose");
        ships.add("Courageous");
        ships.add("Intrepid");

        model.addAttribute("data", ships);

        return "example";
    }
}
