package main

import (
	"fmt"
	"log"
	"net/http"
	"webapp/src/config"
	"webapp/src/cookies"
	"webapp/src/router"
	"webapp/src/utils"
)

func main() {
	config.Carregar()
	cookies.Configurar()
	utils.CarregarTemplates()
	fmt.Println("Rodando WebApp")

	fmt.Println(config.Porta)

	r := router.Gerar()
	log.Fatal(http.ListenAndServe(":3000", r))
}
