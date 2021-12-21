package com.ersiol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

//@Data equivale a todos os gets, sets e contrutores
@Data

// Esta classe também será equivalente a uma
// entidade que tem o mesmo nome de uma tabela do BD então usar o @Entity
@Entity

public class Courses {

    @Id // equivale a chave primária
    @GeneratedValue(strategy = GenerationType.AUTO) // gera o valor de Id automaticamente
    @JsonProperty("_id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 10, nullable = false)
    private String category;

}
