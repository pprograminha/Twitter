import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;

    > button {
        margin-left: 10px;
        padding: 5px 17px;
        font-size: min(15px, 1vw);
    }

`;
export const Avatar = styled.div`
    width: 35px;
    height: 35px;

    margin-right: 10px;
    border-radius: 50%;

    background-color: var(--gray);

    flex-shrink: 0;
`;
export const ProfileData = styled.div`
    display: flex;
`;
export const Data = styled.div`
    display: flex;
    flex-direction: column;
    > strong{
        font-size: min(15px, 1vw);
    }
    > span {
        font-size: 15px;
        color: var(--gray);
    }
`;