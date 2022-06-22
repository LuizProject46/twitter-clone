import React from "react";
import Feed from "../Feed"
import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    Location,
    CakeIcon,
    EditButton,
    Followage

} from './styles'

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar>
                    <img src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t39.30808-1/s200x200/267105816_1863354310502505_5339653811203471669_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFqhMXFjAuXtA_VEbbcebmfhunem39N41qG6d6bf03jWrdpsUylCW8Lean2VxAYn7zjPPI2YKSu9wLf0zmcwcHa&_nc_ohc=Pdm-1bCqjUYAX8woGll&_nc_ht=scontent.fcpq2-1.fna&oh=00_AT9BBYiuRLp2RMKFOvloMLoDJSfTie_Qa5f5wt9AwqgQVA&oe=61D45720"/>
                </Avatar>
                


            </Banner>
            <ProfileData>
                <EditButton outlined >Editar perfil</EditButton>
                <h1>Luiz Gustavo</h1>
                <h2>@luiz_gust</h2>
                <p>Data Engineer at <a href="#">@IBM</a></p>
                <ul>
                    <li>
                        <Location/>
                        Sumaré SP, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 3 de janeiro de 2000
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>1000</strong>
                    </span>
                    <span>
                        <strong>2000</strong> seguidores
                    </span>
                </Followage>

            </ProfileData>
            <Feed/>
        </Container>
    )
}


export default ProfilePage;