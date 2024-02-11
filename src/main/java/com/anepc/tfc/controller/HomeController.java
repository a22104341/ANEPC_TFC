package com.anepc.tfc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HomeController {

    @GetMapping("/login")
    public String loginPage(Model model){

        model.addAttribute("page", "Iniciar Sessão");

        return "login";
    }
    @GetMapping("/criar_cto")
    public String criarCtoPage(Model model){

        model.addAttribute("page", "Criar CTO");

        return "ctoForm";
    }
    @GetMapping("/ctos")
    public String ctosPage(Model model){

        model.addAttribute("page", "CTO's");

        return "ctos";
    }
    @GetMapping("/estatisticas")
    public String statisticsPage(Model model){

        model.addAttribute("page", "Consultar Estatísticas");

        return "statistics";
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
