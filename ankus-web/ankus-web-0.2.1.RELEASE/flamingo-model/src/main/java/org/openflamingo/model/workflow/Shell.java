//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vhudson-jaxb-ri-2.1-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2013.11.30 at 02:11:34 오후 KST 
//


package org.openflamingo.model.workflow;

import org.eclipse.persistence.oxm.annotations.XmlCDATA;

import javax.xml.bind.annotation.*;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="path" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="script" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="working" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element ref="{http://www.openflamingo.org/schema/workflow}args" minOccurs="0"/>
 *         &lt;element ref="{http://www.openflamingo.org/schema/workflow}envs" minOccurs="0"/>
 *         &lt;element ref="{http://www.openflamingo.org/schema/workflow}command" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "path",
    "script",
    "working",
    "args",
    "envs",
    "command"
})
@XmlRootElement(name = "shell")
public class Shell {

    @XmlElement(required = true)
    protected String path;
    @XmlElement(required = true)
    @XmlCDATA
    protected String script;
    @XmlElement(required = true)
    protected String working;
    protected Args args;
    protected Envs envs;
    protected Command command;

    /**
     * Gets the value of the path property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPath() {
        return path;
    }

    /**
     * Sets the value of the path property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPath(String value) {
        this.path = value;
    }

    /**
     * Gets the value of the script property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getScript() {
        return script;
    }

    /**
     * Sets the value of the script property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setScript(String value) {
        this.script = value;
    }

    /**
     * Gets the value of the working property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getWorking() {
        return working;
    }

    /**
     * Sets the value of the working property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setWorking(String value) {
        this.working = value;
    }

    /**
     * Gets the value of the args property.
     * 
     * @return
     *     possible object is
     *     {@link Args }
     *     
     */
    public Args getArgs() {
        return args;
    }

    /**
     * Sets the value of the args property.
     * 
     * @param value
     *     allowed object is
     *     {@link Args }
     *     
     */
    public void setArgs(Args value) {
        this.args = value;
    }

    /**
     * Gets the value of the envs property.
     * 
     * @return
     *     possible object is
     *     {@link Envs }
     *     
     */
    public Envs getEnvs() {
        return envs;
    }

    /**
     * Sets the value of the envs property.
     * 
     * @param value
     *     allowed object is
     *     {@link Envs }
     *     
     */
    public void setEnvs(Envs value) {
        this.envs = value;
    }

    /**
     * Gets the value of the command property.
     * 
     * @return
     *     possible object is
     *     {@link Command }
     *     
     */
    public Command getCommand() {
        return command;
    }

    /**
     * Sets the value of the command property.
     * 
     * @param value
     *     allowed object is
     *     {@link Command }
     *     
     */
    public void setCommand(Command value) {
        this.command = value;
    }

}
