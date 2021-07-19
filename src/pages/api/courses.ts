/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest,res: NextApiResponse) => {
    const courses = [
        {id:1, name: 'Next.js com type'},
        {id:2, name: 'React com type'},
        {id:3, name: 'Styled-Components com type'},
    ];

    return res.json(courses);
}