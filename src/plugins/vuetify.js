import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'
import icon from "@/assets/img/index.js";
import IconSvg from "@/components/base/IconSvg.vue";

Vue.use(Vuetify)

const theme = {
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    disable: true,
  },
  icons: {
    iconfont: "fa",
    values: {
      event: "fa-calendar",
      user: "fas fa-id-card-alt",
      contact: "fas fa-user",
      third: "fas fa-building",
      hausse: {
        component: IconSvg,
        props: {
          src: icon.hausse,
        },
      },
      baisse: {
        component: IconSvg,
        props: {
          src: icon.baisse,
        },
      },
      iconeChevronGreen: {
        component: IconSvg,
        props: {
          src: icon.icone_chevron,
        },
      },
      iconeCheckWhite: {
        component: IconSvg,
        props: {
          src: icon.picto_check_white,
        },
      },
      iconeTrash: {
        component: IconSvg,
        props: {
          src: icon.picto_trash_white,
        },
      },
      iconeModify: {
        component: IconSvg,
        props: {
          src: icon.picto_modify,
        },
      },
      iconeFarm: {
        component: IconSvg,
        props: {
          src: icon.picto_ferme_white,
        },
      },
      iconePhone: {
        component: IconSvg,
        props: {
          src: icon.icone_appel2,
        },
      },
      iconeGpsBlue: {
        component: IconSvg,
        props: {
          src: icon.icone_gps_blue,
        },
      },
      iconeMagasin: {
        component: IconSvg,
        props: {
          src: icon.icone_magasin,
        },
      },
      iconePointRelais: {
        component: IconSvg,
        props: {
          src: icon.icone_point_relais,
        },
      },
      iconeAppelWhite: {
        component: IconSvg,
        props: {
          src: icon.icone_appel_white,
        },
      },
      iconeContact: {
        component: IconSvg,
        props: {
          src: icon.icone_contact,
        },
      },
      iconeModifyGrey: {
        component: IconSvg,
        props: {
          src: icon.picto_modification,
        },
      },
      iconeCheckboxWhite: {
        component: IconSvg,
        props: {
          src: icon.picto_checkbox_white,
        },
      },
      iconeCheckboxGreen: {
        component: IconSvg,
        props: {
          src: icon.picto_checkbox_green,
        },
      },
      iconeCheckboxGrey: {
        component: IconSvg,
        props: {
          src: icon.picto_checkbox_grey,
        },
      },
      iconeCheckboxValidateGreen: {
        component: IconSvg,
        props: {
          src: icon.picto_checkbox_validate_green,
        },
      },
      iconeCheckboxValidateWhite: {
        component: IconSvg,
        props: {
          src: icon.picto_checkbox_validate_white,
        },
      },
      iconeCheck: {
        component: IconSvg,
        props: {
          src: icon.picto_check,
        },
      },
      iconeArrowLeftGrey: {
        component: IconSvg,
        props: {
          src: icon.picto_arrow_left_grey,
        },
      },
      iconeArrowGreenRight: {
        component: IconSvg,
        props: {
          src: icon.picto_arrow_green_right,
        },
      },
      iconeArrowBlackRight: {
        component: IconSvg,
        props: {
          src: icon.picto_arrow_black_right,
        },
      },
      pictoOuverturePrix: {
        component: IconSvg,
        props: {
          src: icon.picto_ouverture_prix,
        },
      },
      pictoActivitiesGreen: {
        component: IconSvg,
        props: {
          src: icon.picto_activities_green,
        },
      },
      iconeCloseGreen: {
        component: IconSvg,
        props: {
          src: icon.icone_close,
        },
      },
      iconeCloseGrey: {
        component: IconSvg,
        props: {
          src: icon.picto_close_light_grey,
        },
      },
      iconeCloseSaumon: {
        component: IconSvg,
        props: {
          src: icon.picto_close_saumon,
        },
      },
      iconePhoto: {
        component: IconSvg,
        props: {
          src: icon.icone_photo,
        },
      },
      pictoSmartphone: {
        component: IconSvg,
        props: {
          src: icon.picto_smartphone,
        },
      },
      iconeVisuTc: {
        component: IconSvg,
        props: {
          src: icon.icone_visu_tc,
        },
      },
      iconeOeil: {
        component: IconSvg,
        props: {
          src: icon.icone_Oeil,
        },
      },
      iconeOeilGreen: {
        component: IconSvg,
        props: {
          src: icon.icone_Eye_Green,
        },
      },
      iconPlus: {
        component: IconSvg,
        props: {
          src: icon.icon_plus,
        },
      },
      iconPlusGreen: {
        component: IconSvg,
        props: {
          src: icon.icon_plus_green,
        },
      },
      iconPlusBlue: {
        component: IconSvg,
        props: {
          src: icon.icon_plus_blue,
        },
      },
      iconStar: {
        component: IconSvg,
        props: {
          src: icon.icon_star,
        },
      },
      iconTrashGrey: {
        component: IconSvg,
        props: {
          src: icon.icone_trash_grey,
        },
      },
      iconClockLightGrey: {
        component: IconSvg,
        props: {
          src: icon.picto_clock_light_grey,
        },
      },
      iconeEngrenage: {
        component: IconSvg,
        props: {
          src: icon.icone_engrenage,
        },
      },
      icone1: {
        component: IconSvg,
        props: {
          src: icon.icone_1,
        },
      },
      icone2: {
        component: IconSvg,
        props: {
          src: icon.icone_2,
        },
      },
      icone3: {
        component: IconSvg,
        props: {
          src: icon.icone_3,
        },
      },
      pluie: {
        component: IconSvg,
        props: {
          src: icon.pluie,
        },
      },
      vent: {
        component: IconSvg,
        props: {
          src: icon.vent,
        },
      },
      humidite: {
        component: IconSvg,
        props: {
          src: icon.humidite,
        },
      },
      temperature: {
        component: IconSvg,
        props: {
          src: icon.temperature,
        },
      },
      nuage: {
        component: IconSvg,
        props: {
          src: icon.couv_nuageuse,
        },
      },
      soleil: {
        component: IconSvg,
        props: {
          src: icon.soleil,
        },
      },
      loupeGrey: {
        component: IconSvg,
        props: {
          src: icon.loupe_grey,
        },
      },
      meteoPartiellementNuageux: {
        component: IconSvg,
        props: {
          src: icon.meteo_partiellement_nuageux,
        },
      },
      ventBlue: {
        component: IconSvg,
        props: {
          src: icon.vent_blue,
        },
      },
      temperatureBlue: {
        component: IconSvg,
        props: {
          src: icon.temperature_blue,
        },
      },
      temperatureBlack: {
        component: IconSvg,
        props: {
          src: icon.temperature_black,
        },
      },
      pluieBlue: {
        component: IconSvg,
        props: {
          src: icon.pluie_blue,
        },
      },
      pluieBlack: {
        component: IconSvg,
        props: {
          src: icon.pluie_black,
        },
      },
      humiditeBlue: {
        component: IconSvg,
        props: {
          src: icon.humidite_blue,
        },
      },
      iconeNumcontrat: {
        component: IconSvg,
        props: {
          src: icon.icone_numcontrat,
        },
      },
      iconeCalendrier: {
        component: IconSvg,
        props: {
          src: icon.icone_calendrier,
        },
      },
      pictoArrowRed: {
        component: IconSvg,
        props: {
          src: icon.picto_arrow_down_red,
        },
      },
      pictoArrowGreen: {
        component: IconSvg,
        props: {
          src: icon.picto_arrow_up_green,
        },
      },
      pictoChevronBlue: {
        component: IconSvg,
        props: {
          src: icon.icone_chevron_blue,
        },
      },
      pointeurMeteo: {
        component: IconSvg,
        props: {
          src: icon.pointeur_meteo,
        },
      },
      Profil: {
        component: IconSvg,
        props: {
          src: icon.profil,
        },
      },
      PictoAppelSaumon: {
        component: IconSvg,
        props: {
          src: icon.icone_appel_saumon,
        },
      },
      PictoFermetureTech: {
        component: IconSvg,
        props: {
          src: icon.picto_fermeture_tech
        },
      },
      ApiErrorContrat: {
        component: IconSvg,
        props: {
          src: icon.erreur_contrat,
        },
      },
      ApiErrorCotation: {
        component: IconSvg,
        props: {
          src: icon.erreur_cotation,
        },
      },
      ApiErrorMeteo: {
        component: IconSvg,
        props: {
          src: icon.erreur_meteo,
        },
      },

      61459: {
        component: IconSvg,
        props: {
          src: icon.meteo_nuageux,
        },
      },
      61457: {
        component: IconSvg,
        props: {
          src: icon.meteo_nuageux_venteux,
        },
      },
      61466: {
        component: IconSvg,
        props: {
          src: icon.meteo_couvert_pluie,
        },
      },
      61463: {
        component: IconSvg,
        props: {
          src: icon.meteo_pluvieux,
        },
      },
      61465: {
        component: IconSvg,
        props: {
          src: icon.meteo_orageux,
        },
      },
      61621: {
        component: IconSvg,
        props: {
          src: icon.meteo_bruine,
        },
      },
      61467: {
        component: IconSvg,
        props: {
          src: icon.meteo_neige,
        },
      },
      61442: {
        component: IconSvg,
        props: {
          src: icon.meteo_partiellement_nuageux,
        },
      },
      61440: {
        component: IconSvg,
        props: {
          src: icon.meteo_venteux_nuage,
        },
      },
      61448: {
        component: IconSvg,
        props: {
          src: icon.meteo_nuageux_venteux,
        },
      },
      61573: {
        component: IconSvg,
        props: {
          src: icon.meteo_venteux_fort,
        },
      },
      61554: {
        component: IconSvg,
        props: {
          src: icon.meteo_vague_chaleur,
        },
      },
      61453: {
        component: IconSvg,
        props: {
          src: icon.meteo_ensolleille,
        },
      }
    },
  },
})
