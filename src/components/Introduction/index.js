import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 30px;
  width: 600px;
  margin-top: 30px;
  background: #fafafa;
`

const HeadLine = styled.h1`
  color: #3f3f3f;
`

const Description = styled.div`
  margin: 10px;
  background: #ccc;
  flex: display;
  flex: 1;
  line-height: 26px;
  color: #3f3f3f;
  background: #fff;
  padding: 10px;
`

const Paragraph = styled.p``

export default () => (
  <Hero>
    <HeadLine>Welcome</HeadLine>
    <Description>
      <Paragraph>
        We would like to invite you to participate in this survey that is part
        of a joint research project conducted by an e-commerce platform for
        luxury watches and <a href="https://www.ise.tu-darmstadt.de">ISE</a> (Institute for Information Systems &amp;
        E-Services at Darmstadt University of Technology, Germany). We need your
        help to improve the service of this e-commerce platform.
      </Paragraph>
      <Paragraph>
        In the following you will explore a fictional e-commerce platform. You
        will then be redirected to a questionaire to capture your experience.
      </Paragraph>
      <Paragraph>
        The completion of this survey will take <b>about 10 minutes</b>. Please
        note that there are no right or wrong answers to any of the questions.
        We are interested in your subjective opinion.
      </Paragraph>

      <Paragraph>
        Your participation in this study is greatly appreciated!
      </Paragraph>

      <Paragraph>
        Kind regards, <br />
        <a href="https://www.ise.tu-darmstadt.de/ise/team_ise/employees/johannes_klumpe/index.de.jsp">Johannes Klumpe</a> &amp; <a href="https://www.ise.tu-darmstadt.de/ise/team_ise/employees/konstantin_roethke/index.de.jsp">Kostantin R&ouml;thke</a>
      </Paragraph>
    </Description>
    <Link to="/briefing/">Next</Link>
  </Hero>
)
