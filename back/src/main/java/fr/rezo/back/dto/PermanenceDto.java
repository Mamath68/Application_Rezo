package fr.rezo.back.dto;

import java.util.List;

public record PermanenceDto(
        String address,
        String nomLocal,
        String shortLocal,
        String contact,
        String phoneContact,
        String date,
        String permanenceDebut,
        String permanenceFin,
        List<SavoirDto> savoirs
) {
}
