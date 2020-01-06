import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
  query PageQuery($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
    }
  }
`;

const PROJ_QUERY = gql`
  query ProjectQuery {
    projectTypes {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`;


/**
 * Fetch and display a Page
 */
class Portfolio extends Component {
  state = {
    page: {
      title: '',
      content: '',
    },
    projectTypes: []
  };

  componentDidMount() {
    this.executePageQuery();
    this.executeProjectTypeQuery();
  }

  componentDidUpdate( prevProps ) {
    let { props } = this;
    if(props.match.params.slug !== prevProps.match.params.slug){
      this.executePageQuery();
      this.executeProjectTypeQuery();
    }
  }  
  
  /**
   * Execute page query, process the response and set the state
   */
  executePageQuery = async () => {
    const { match, client } = this.props;
    let uri = match.params.slug;
    if (!uri) {
      uri = 'welcome';
    }
    const result = await client.query({
      query: PAGE_QUERY,
      variables: { uri },
    });
    const page = result.data.pageBy;
    this.setState({ page });
  };

  executeProjectTypeQuery = async () => {
    const { match, client } = this.props;
    const result = await client.query({
      query: PROJ_QUERY,
    });
    let projectTypes = result.data.projectTypes.edges;
    projectTypes = projectTypes.map(project => {
      const finalLink = `/portfolio/${project.node.slug}`;
      const modifiedProject = { ...project };
      modifiedProject.node.link = finalLink;
      return modifiedProject;
    });
    this.setState({ projectTypes });
  }
  
  render() {
    const { page, projectTypes } = this.state;
    return (
      <div style={{marginLeft: '315px'}}>
        <h1>Portfolio</h1>
        <p>{JSON.stringify(page)}</p>
        <div className="pa2">
          <h1>{page.title}</h1>
        </div>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: page.content,
          }}
        />
        <div>
          <h2>Lets check some more shit right here then.</h2>
          <ul>
            { projectTypes.map((project) => 
              <Link to={project.node.link}>
                <li>{project.node.name}</li>
              </Link>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default withApollo(Portfolio);
