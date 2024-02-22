package com.anepc.tfc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "cto_denied")
public class Cto_Denied {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;


    @Column(name = "feedback", nullable = false, length = 500)
    private String feedback;

    /* FK missing */
}
