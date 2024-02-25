package com.anepc.tfc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "cto_history")
public class Cto_History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;


    @Column(name = "action", nullable = false)
    private char action;

    @Column(name = "date_creation", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date_creation;

    /* Foreign Keys */
    @OneToOne
    private User user_ID;

    @OneToOne
    private User cto_ID;

}
