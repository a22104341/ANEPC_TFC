package com.anepc.tfc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "cto_data")
public class Cto_Data {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;


    @Column(name = "field_id", nullable = false, length = 50)
    private String field_id;

    @Column(name = "field_data", nullable = false)
    private String field_data;

    /* FK missing */
}
