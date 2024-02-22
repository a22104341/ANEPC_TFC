package com.anepc.tfc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "cto_data")
public class CTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;


    @Column(name = "number", nullable = false)
    private int number;

    @Column(name = "date_creation", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_creation;

    @Column(name = "date_last_update", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_last_update;

    @Column(name = "status", nullable = false)
    private char status;
}
