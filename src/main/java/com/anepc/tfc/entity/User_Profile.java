package com.anepc.tfc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user_profile")
public class User_Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int user_profile_ID;

    /* Foreign Keys */
    @OneToOne
    private User user_ID;

    @OneToOne
    private Profile profile_ID;

}
